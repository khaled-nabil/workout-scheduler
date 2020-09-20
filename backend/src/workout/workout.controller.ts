import { Controller, Get } from '@nestjs/common';
import { Workout } from './workout.interface';
import { WorkoutService } from './workout.service';

@Controller('workout')
export class WorkoutController {
    constructor(private workoutService: WorkoutService) {}

    @Get()
    async findAll(): Promise<Array<Workout>> {
        return this.workoutService.findAll();
    }
}
