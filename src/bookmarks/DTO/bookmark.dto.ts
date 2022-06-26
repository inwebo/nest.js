import { IsString } from 'class-validator';

export class BookmarkDto {
  @IsString()
  readonly title: string;
}
