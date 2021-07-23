import { Test, TestingModule } from '@nestjs/testing';
import { RoastmeController } from './roastme.controller';

describe('RoastmeController', () => {
  let controller: RoastmeController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RoastmeController],
    }).compile();

    controller = module.get<RoastmeController>(RoastmeController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
