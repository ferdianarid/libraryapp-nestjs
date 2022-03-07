import { Test, TestingModule } from '@nestjs/testing';
import { BookLoansService } from "services/booksloans.service";

describe('BooksloansService', () => {
  let service: BookLoansService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BookLoansService],
    }).compile();

    service = module.get<BookLoansService>(BookLoansService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
