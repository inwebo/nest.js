import { Controller, Get, Post, Req } from '@nestjs/common';
import { Request } from 'express';

@Controller('bookmarks')
export class BookmarksController {
    @Post()
    create(): string {
      return 'This action adds a new bookmark';
    }

    @Get()
    findAll(@Req() request: Request): string {
        console.log(request)
      return 'This action returns all bookmarks';
    }
 }
