import {Controller, Get, Param, Req, Request} from '@nestjs/common';

@Controller('roast')
export class RoastmeController {

    @Get('/me/:name')
    test(@Req() request: Request, @Param('name') name: string): string {
      return 'T es moche ' + name;
    }
}
