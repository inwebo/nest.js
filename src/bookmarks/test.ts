import { NestFactory } from '@nestjs/core';
import { AppModule } from '../../src/app.module';
import { BookmarksModule } from './bookmarks.module';

async function bootstrap() {
  const app = await NestFactory.createApplicationContext(AppModule);
  // application logic...
  console.log('test');
  await app.close();
}
bootstrap();
