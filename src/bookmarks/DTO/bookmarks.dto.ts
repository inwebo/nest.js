import { BookmarksMetaDto } from './bookmarks.meta.dto';
import { IsArray } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class BookmarksDto<T> {
  @IsArray()
  readonly data: T[];

  @ApiProperty({ type: () => BookmarksMetaDto })
  readonly meta: BookmarksMetaDto;

  constructor(data: T[], meta: BookmarksMetaDto) {
    this.data = data;
    this.meta = meta;
  }
}
