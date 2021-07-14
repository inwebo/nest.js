import { BookmarksService } from './bookmarks.service';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Bookmark } from './bookmark.entity';
import { BookmarksController } from './bookmarks.controller';
import { TagssService } from './tags.service';
import { BookmarksImportService } from './bookmarksImport.service';
import { ConsoleService } from 'nestjs-console';

@Module({
    imports: [
        TypeOrmModule.forFeature([Bookmark]), 
        ConsoleService
    ],
    providers: [
        BookmarksService,
        TagssService,
        //BookmarksImportService
    ],
    exports: [BookmarksModule],
    controllers: [BookmarksController]
})
export class BookmarksModule { }
