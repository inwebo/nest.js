import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BookmarksModule } from './bookmarks/bookmarks.module';
import { UsersModule } from './users/users.module';
import { RoastmeModule } from './roastme/roastme.module';
import { Roastme } from './roastme';
import { RoastmeController } from './roastme/roastme.controller';

@Module({
  imports: [
    TypeOrmModule.forRoot(),
    BookmarksModule,
    UsersModule,
    RoastmeModule,
  ],
  controllers: [AppController, RoastmeController],
  providers: [AppService, Roastme],
})
export class AppModule {}
