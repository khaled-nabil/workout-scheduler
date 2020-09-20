import { Injectable } from '@nestjs/common';
import { Workout } from './workout.interface';

@Injectable()
export class WorkoutService {
    private readonly workout: Array<Workout> = [
        {
            name: 'workout A',
            description: 'description of A',
            startDate: new Date(),
            category: 'c1',
        },
        {
            name: 'workout B',
            description: 'description of B',
            startDate: new Date(),
            category: 'c2',
        },
    ];

    findAll(): Array<Workout> {
        return this.workout;
    }
}
