import { BookmarksService } from './bookmarks.service';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Bookmark } from './bookmark.entity';
import { BookmarksController } from './bookmarks.controller';
import { TagssService } from './tags.service';


@Module({
    imports: [TypeOrmModule.forFeature([Bookmark])],
    providers: [
        BookmarksService,
        TagssService,
    ],
    exports: [BookmarksModule],
    controllers: [BookmarksController]
})
export class BookmarksModule { }
