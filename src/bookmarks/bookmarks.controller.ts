import {
  ClassSerializerInterceptor,
  Controller,
  Get,
  HttpCode,
  HttpStatus, Param,
  Post,
  Query,
  Req,
  UseInterceptors,
} from '@nestjs/common';
import { Request } from 'express';
import { TagssService } from './tags.service';
import { getConnection } from 'typeorm';

import { Bookmark } from './bookmark.entity';
import * as JSON_DATA from '../../data/data.json';
import { BookmarksDto } from './DTO/bookmarks.dto';
import Any = jasmine.Any;
import { BookmarksService } from './bookmarks.service';
import { BookmarksOptionsDto } from './DTO/bookmarks.options.dto';

import { Md5 as md5 } from 'ts-md5/dist/md5';

@Controller('bookmarks')
@UseInterceptors(ClassSerializerInterceptor)
export class BookmarksController {
  constructor(
    private readonly tagService: TagssService,
    private readonly bookmarkService: BookmarksService,
  ) {}

  @Get()
  @HttpCode(HttpStatus.OK)
  async getBookmarks(
    @Query() bookmarksOptionsDto: BookmarksOptionsDto,
  ): Promise<BookmarksDto<Any>> {
    return this.bookmarkService.getBookmarks(bookmarksOptionsDto);
  }

  @Get(':id')
  findOne(@Param() params) {
    return this.bookmarkService.findOne(`${params.id}`);
  }

  @Post()
  create(): string {
    return 'This action adds a new bookmark';
  }

  @Get()
  findAll(@Req() request: Request): string {
    return 'This action returns all bookmarks';
  }

  @Get('tags')
  tagsAction() {
    return {};
  }

  @Get('import')
  async importAction() {
    Object.values(JSON_DATA).forEach((value) => {
      getConnection()
        .createQueryBuilder()
        .insert()
        .into(Bookmark)
        .values([
          {
            md5: md5.hashStr(value.href),
            url: value.href,
            title: value.title,
            description: '',
            createdAt: value.addDate,
          },
        ])
        .execute();
    });

    return {
      message: 'done',
    };
  }
}
