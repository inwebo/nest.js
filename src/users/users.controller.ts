import { Controller, Get, Param, Req, Request } from '@nestjs/common';

@Controller('users')
export class UsersController {
    @Get()
    index(@Req() request: Request): string {    
      return `Users index`;
    }
    
    @Get('/:id')
    findOne(
        @Param() params
    ): string {
        return `User id ${params.id}`;
    }
 }
