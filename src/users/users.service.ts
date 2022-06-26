import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Bookmark } from 'src/bookmarks/bookmark.entity';
import { Repository } from 'typeorm';
import { User } from './user.entity';

@Injectable()
export class UsersService {
  public getRepository(): Repository<User> {
    return this.usersRepository;
  }

  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  findAll(): Promise<User[]> {
    return this.usersRepository.find();
  }

  findOne(id: string): Promise<User> {
    return this.usersRepository.findOne(id);
  }

  async findOnById($id: number): Promise<void> {
    await this.usersRepository.findOne($id);
  }

  async remove(id: string): Promise<void> {
    await this.usersRepository.delete(id);
  }
}
