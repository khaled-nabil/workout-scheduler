import {
    Controller,
    DefaultValuePipe,
    Get,
    Param,
    ParseIntPipe,
    Query,
} from '@nestjs/common';
import { ObjectID } from 'typeorm';
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
        if (limit > 100) limit = 100;
        return await this.workoutService.findAll({ limit, offset });
    }

    @Get(':id')
    async getWorkout(
        @Param('id')
        id: ObjectID
    ): Promise<Workout> {
        return await this.workoutService.findOne(id);
    }
}
