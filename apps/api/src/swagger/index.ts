import { DocumentBuilder, OpenAPIObject, SwaggerModule } from '@nestjs/swagger';
import { INestApplication } from '@nestjs/common';

export const config = new DocumentBuilder()
  .setTitle('Kream Compare Viewer REST API')
  .setVersion('0.1.0')
  .build();

export const getDocument = (app: INestApplication): OpenAPIObject => {
  return SwaggerModule.createDocument(app, config);
};

export const setUpDocument = (app: INestApplication): void => {
  SwaggerModule.setup('docs', app, getDocument(app));
};
