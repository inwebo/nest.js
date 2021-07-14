import { Controller, Get, Post, Req } from '@nestjs/common';
import { Request } from 'express';
import { TagssService } from './tags.service';

@Controller('bookmarks')
export class BookmarksController {
  constructor(
    private readonly tagService: TagssService,
    ) {}

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
      return { 

      };
    }
 }
