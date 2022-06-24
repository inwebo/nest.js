import {ApiProperty} from "@nestjs/swagger";
import {BookmarksOptionsInterfaceDto} from "./bookmarks.options.interface.dto";

export class BookmarksMetaDto {
    @ApiProperty()
    readonly page: number;

    @ApiProperty()
    readonly take: number;

    @ApiProperty()
    readonly itemCount: number;

    @ApiProperty()
    readonly pageCount: number;

    @ApiProperty()
    readonly hasPreviousPage: boolean;

    @ApiProperty()
    readonly hasNextPage: boolean;

    constructor(bookmarksOptionsDto, itemCount) {
        this.page = bookmarksOptionsDto.page;
        this.take = bookmarksOptionsDto.take;
        this.itemCount = itemCount;
        this.pageCount = Math.ceil(this.itemCount / this.take);
        this.hasPreviousPage = this.page > 1;
        this.hasNextPage = this.page < this.pageCount;
    }
}