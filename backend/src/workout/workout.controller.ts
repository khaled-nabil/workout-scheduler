import {
    Controller,
    DefaultValuePipe,
    Get,
    ParseIntPipe,
    Query,
} from '@nestjs/common';
import { Workout } from './workout.interface';
import { WorkoutService } from './workout.service';

@Controller('workout')
export class WorkoutController {
    constructor(private workoutService: WorkoutService) {}

    @Get()
    async getWorkouts(
        @Query('limit', new DefaultValuePipe(10), ParseIntPipe)
        limit: number,
        @Query('offset', new DefaultValuePipe(0), ParseIntPipe)
        offset: number
    ): Promise<Array<Workout>> {
        console.log(typeof limit, limit, typeof offset, offset);
        if (limit > 100) limit = 100;
        return this.workoutService.findAll({ limit, offset });
    }
}
