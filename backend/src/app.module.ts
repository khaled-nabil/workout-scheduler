import { Module } from '@nestjs/common';
import { WorkoutModule } from './workout/workout.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
    imports: [
        TypeOrmModule.forRoot({
            type: 'mongodb',
            host: 'localhost',
            port: 27017,
            username: 'root',
            password: 'pass',
            database: 'workout-scheduler',
            entities: ['src/**/**.entity{.ts,.js}'],
            synchronize: true,
        }),
        WorkoutModule,
    ],
})
export class AppModule {}
