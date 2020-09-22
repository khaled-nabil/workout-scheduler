import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { In, MongoRepository, ObjectID } from 'typeorm';
import { Category } from '../categories/category.interface';
import { WorkoutEntity } from './workout.entity';
import { FindAll, FindAllWhereQuery, Workout } from './workout.interface';

@Injectable()
export class WorkoutService {
    constructor(
        @InjectRepository(WorkoutEntity)
        private readonly workoutRepository: MongoRepository<WorkoutEntity>
    ) {}
    findAll: FindAll = async ({ limit, offset }, { startDate, category }) => {
        const where: FindAllWhereQuery = {};

        if (startDate) where.startDate = { $gte: new Date(startDate) };
        if (category) where.category = { $in: category };
        const workouts = await this.workoutRepository.find({
            skip: offset,
            take: limit,
            where: where,
            order: { startDate: 'ASC' },
        });

        return workouts;
    };

    async findOne(id: ObjectID): Promise<Workout> {
        const workout = await this.workoutRepository.findOne(id);

        return workout;
    }

    allCategories(): Array<Category> {
        return Object.values(Category);
    }
}
