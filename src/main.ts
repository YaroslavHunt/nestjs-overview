import { NestFactory } from '@nestjs/core';
import { AppModule } from './modules/app/app.module';
import { ConfigService } from '@nestjs/config';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService = app.get(ConfigService);
  const port = configService.get('port');

// Validation
  app.useGlobalPipes(new ValidationPipe());

// Swagger
  const config = new DocumentBuilder()
    .setTitle('NestJS overview API')
    .setDescription('This api for studies')
    .setVersion('1.0')
    .addTag('API')
    .build()
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('docs', app, document);

  await app.listen(port);
}
bootstrap();
