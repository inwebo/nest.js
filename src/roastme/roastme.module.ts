import { Module } from '@nestjs/common';
import { RoastmeController } from './roastme.controller';

@Module({
  controllers: [RoastmeController],
  exports: [RoastmeModule]
})
export class RoastmeModule {}
