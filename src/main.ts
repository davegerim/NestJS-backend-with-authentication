import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const cors = require('cors');
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('Attendance Managment system')
    .setDescription('a list of attendance managment api')
    .setVersion('1.0')
    .addTag('attendance app')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  app.enableCors();

  await app.listen(3000);
}
bootstrap();
