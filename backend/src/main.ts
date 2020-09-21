import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import * as dotenv from 'dotenv';

dotenv.config();

async function bootstrap() {
    const app = await NestFactory.create(AppModule);
    app.enableCors();
    app.setGlobalPrefix('api');

    const options = new DocumentBuilder()
        .setTitle('Workout Viewer')
        .setDescription('RestAPI providing paginated endpoint of Workouts')
        .setVersion('1.0')
        .addTag('api')
        .build();
    const document = SwaggerModule.createDocument(app, options);
    SwaggerModule.setup('api-doc', app, document);

    await app.listen(process.env.APP_PORT);
}
bootstrap();
