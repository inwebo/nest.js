import { Get, Inject, Injectable, Req } from '@nestjs/common';
import { Bookmark } from './bookmark.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class BookmarksService {
    constructor(
        @InjectRepository(Bookmark)
        private bookmarkRepository: Repository<Bookmark>,
      ) {}

      findOne(id: string): Promise<Bookmark> {
        return this.bookmarkRepository.findOne(id);
      }

}
