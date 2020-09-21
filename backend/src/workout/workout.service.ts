import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { MongoRepository, ObjectID } from 'typeorm';
import { Category } from '../categories/category.interface';
import { WorkoutEntity } from './workout.entity';
import { FindAll, Workout } from './workout.interface';

@Injectable()
export class WorkoutService {
    constructor(
        @InjectRepository(WorkoutEntity)
        private readonly workoutRepository: MongoRepository<WorkoutEntity>
    ) {}
    findAll: FindAll = async ({ limit, offset }) => {
        const workouts = await this.workoutRepository.find({
            skip: offset,
            take: limit,
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
