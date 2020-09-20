import { Controller, Get } from '@nestjs/common';
import { Workout } from './workout.interface';
import { WorkoutService } from './workout.service';

@Controller('workout')
export class WorkoutController {
    constructor(private workoutService: WorkoutService) {}

    @Get()
    async getWorkouts(): Promise<Array<Workout>> {
        const offset = 0;
        const limit = 10;
        return this.workoutService.findAll({ limit, offset });
    }
}
