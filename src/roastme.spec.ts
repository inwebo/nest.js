import { Test, TestingModule } from '@nestjs/testing';
import { Roastme } from './roastme';

describe('Roastme', () => {
  let provider: Roastme;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [Roastme],
    }).compile();

    provider = module.get<Roastme>(Roastme);
  });

  it('should be defined', () => {
    expect(provider).toBeDefined();
  });
});
