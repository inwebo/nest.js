import { Controller, Get, Render } from '@nestjs/common';
import { of } from 'rxjs';
import { AppService } from './app.service';
import { Bookmark } from './bookmarks/bookmark.entity';
import { User } from './users/user.entity';
import { UsersService } from './users/users.service';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly userService: UsersService,
  ) {}

  @Get()
  @Render('index')
  async getHello() {
    const user = this.userService.findOne('1');
    return {
      message: this.appService.getHello(),
      user: await user.then((user) => {
        return user;
      }),
    };
  }
}
