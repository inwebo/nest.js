import { Controller, Get, Req, Request } from '@nestjs/common';

@Controller('roast')
export class RoastmeController {

    @Get('/me/:name')
    test(@Req() request: Request): string {
      return 'Roast me';
    }
}
