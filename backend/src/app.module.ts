import { Module } from '@nestjs/common';
import { WorkoutModule } from './workout/workout.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { NotFoundInterceptor } from './app.interceptor';

@Module({
    imports: [TypeOrmModule.forRoot(), WorkoutModule],
    providers: [
        {
            provide: APP_INTERCEPTOR,
            useClass: NotFoundInterceptor,
        },
    ],
})
export class AppModule {}
