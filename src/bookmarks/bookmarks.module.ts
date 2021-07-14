import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Bookmark } from './bookmark.entity';
import { BookmarksController } from './bookmarks.controller';


@Module({
    imports: [TypeOrmModule.forFeature([Bookmark])],
    providers: [],
    exports: [BookmarksModule],
    controllers: [BookmarksController]
})
export class BookmarksModule {}
