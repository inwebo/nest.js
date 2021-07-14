import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BookmarksModule } from './bookmarks/bookmarks.module';
import { UsersModule } from './users/users.module';
import { ConsoleModule } from 'nestjs-console';
@Module({
  imports: [
    TypeOrmModule.forRoot(),
    BookmarksModule,
    UsersModule,
    ConsoleModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
