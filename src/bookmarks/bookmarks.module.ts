import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Bookmark } from './bookmark.entity';


@Module({
    imports: [TypeOrmModule.forFeature([Bookmark])],
    providers: [],
    exports: [],
})
export class BookmarksModule {}
