import {
    Controller,
    DefaultValuePipe,
    Get,
    Param,
    ParseIntPipe,
    Query,
} from '@nestjs/common';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';
import { ObjectID } from 'typeorm';
import { Category } from '../categories/category.interface';
import { Workout } from './workout.interface';
import { WorkoutService } from './workout.service';

@Controller('workout')
export class WorkoutController {
    constructor(private workoutService: WorkoutService) {}

    @ApiOperation({
        summary: 'Get paginated list of workouts',
        parameters: [
            { name: 'limit', in: 'query' },
            { name: 'offset', in: 'query' },
            { name: 'startDate', in: 'query' },
            { name: 'category', in: 'query' },
        ],
    })
    @ApiResponse({ status: 200, description: 'Return workouts.' })
    @ApiResponse({
        status: 404,
        description: 'No workouts found for query parameters.',
    })
    @Get()
    async getWorkouts(
        @Query('limit', new DefaultValuePipe(20), ParseIntPipe)
        limit: number,
        @Query('offset', new DefaultValuePipe(0), ParseIntPipe)
        offset: number,
        @Query('startDate')
        startDate: Date,
        @Query('category')
        category: Category
    ): Promise<Array<Workout>> {
        if (limit > 20) limit = 20;
        return await this.workoutService.findAll(
            { limit, offset },
            { category, startDate }
        );
    }

    @ApiOperation({
        summary: 'Get single workout by id',
        parameters: [{ name: 'id', in: 'path' }],
    })
    @ApiResponse({ status: 200, description: 'Return workout.' })
    @ApiResponse({
        status: 404,
        description: 'No workouk found with id.',
    })
    @Get(':id')
    async getWorkout(
        @Param('id')
        id: ObjectID
    ): Promise<Workout> {
        return await this.workoutService.findOne(id);
    }
}
