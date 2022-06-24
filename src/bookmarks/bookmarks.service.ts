import { Get, Inject, Injectable, Req } from '@nestjs/common';
import { Bookmark } from './bookmark.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import {BookmarksOptionsDto} from "./DTO/bookmarks.options.dto";
import {BookmarksDto} from "./DTO/bookmarks.dto";
import {BookmarksMetaDto} from "./DTO/bookmarks.meta.dto";

@Injectable()
export class BookmarksService {
    constructor(
        @InjectRepository(Bookmark)
        private readonly bookmarkRepository: Repository<Bookmark>,
      ) {}

      findOne(id: string): Promise<Bookmark> {
        const queryBuilder = this.bookmarkRepository.createQueryBuilder("bookmaks");
        queryBuilder.where('bookmark.$id = :id', {
            id
        });

        return queryBuilder.getOne();
      }

      public async getBookmarks(bookmarksOptionsDto: BookmarksOptionsDto): Promise<BookmarksDto<any>> {
        const qb = this.bookmarkRepository.createQueryBuilder("bookmark");

        qb
            .orderBy('bookmark.createdAt')
            .skip(bookmarksOptionsDto.skip)
            .skip(bookmarksOptionsDto.take);

        const count = await qb.getCount().then((count) => {
            return count;
        });
        const {entities} = await qb.getRawAndEntities();

        const bookmarkMetaDto = new BookmarksMetaDto( bookmarksOptionsDto, 4672 );

        return new BookmarksDto(entities, bookmarkMetaDto);

    }
}

