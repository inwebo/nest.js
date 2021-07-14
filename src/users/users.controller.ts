import { Controller, Get, Param, Req, Request } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
    constructor(
        private readonly userService: UsersService
    ) {}

    @Get()
    indexAction(@Req() request: Request): string {    
      return `Users index`;
    }
    
    @Get('/:id')
    findOne(
        @Param() params
    ): string {
        return `User id ${params.id}`;
    }
 }
