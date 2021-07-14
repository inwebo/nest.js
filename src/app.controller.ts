import { Controller, Get, Render } from '@nestjs/common';
import { AppService } from './app.service';
import { User } from './users/user.entity';
import { UsersService } from './users/users.service';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly userService: UsersService
    ) {}

  @Get()
  @Render('index')
  getHello() {
    const user = this.userService.findAll();

    console.log(user);

    return { 
      message: this.appService.getHello(),
      user: user,
    };
  }
}
