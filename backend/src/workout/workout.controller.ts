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
        ],
    })
    @ApiResponse({ status: 200, description: 'Return workouts.' })
    @ApiResponse({
        status: 404,
        description: 'No workouts found for query parameters.',
    })
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
