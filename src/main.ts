import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { NODE_ENV, validateEnvVars } from './config/environment.config';
import { AppModule } from './app.module';

async function bootstrap() {
  validateEnvVars();

  const app = await NestFactory.create(AppModule);
  const config = new DocumentBuilder()
    .setTitle('Finance')
    .setDescription('finance app')
    .setVersion('0.0.1')
    .addBearerAuth({ type: 'http', in: 'header' })
    .build();
  const document = SwaggerModule.createDocument(app, config);

  if (NODE_ENV === 'development') SwaggerModule.setup('docs', app, document);
  app.enableCors();
  await app.listen(80);
}
bootstrap();
