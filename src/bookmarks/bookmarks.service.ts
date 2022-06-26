import { Get, Inject, Injectable, Req } from '@nestjs/common';
import { Bookmark } from './bookmark.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { BookmarksOptionsDto } from './DTO/bookmarks.options.dto';
import { BookmarksDto } from './DTO/bookmarks.dto';
import { BookmarksMetaDto } from './DTO/bookmarks.meta.dto';

@Injectable()
export class BookmarksService {
  constructor(
    @InjectRepository(Bookmark)
    private readonly bookmarkRepository: Repository<Bookmark>,
  ) {}

  findOne(id: string): Promise<Bookmark> {
    const queryBuilder = this.bookmarkRepository.createQueryBuilder('bookmarks');
    queryBuilder.where('bookmarks.$id = :id', {
      id,
    });

    queryBuilder.leftJoinAndSelect('bookmarks.tags', 'tags');

    return queryBuilder.getOne();
  }

  public async getBookmarks(
    bookmarksOptionsDto: BookmarksOptionsDto,
  ): Promise<BookmarksDto<any>> {
    const qb = this.bookmarkRepository.createQueryBuilder('bookmark');

    qb.orderBy('bookmark.createdAt')
      .skip(bookmarksOptionsDto.skip)
      .skip(bookmarksOptionsDto.take);

    const count = await qb.getCount();
    const { entities } = await qb.getRawAndEntities();

    const bookmarkMetaDto = new BookmarksMetaDto(bookmarksOptionsDto, count);

    return new BookmarksDto(entities, bookmarkMetaDto);
  }
}
