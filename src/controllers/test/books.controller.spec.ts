import { Test, TestingModule } from '@nestjs/testing';
import { BooksController } from "controllers/books.controller";
import { BooksService } from 'services/books.service';

describe('BooksController', () => {
	let controller: BooksController;
	const mockService = {

	}
	beforeEach(async () => {
		const module: TestingModule = await Test.createTestingModule({
			controllers: [BooksController],
		})
			.overrideProvider(BooksService)
			.useValue(mockService)
			.compile();

		controller = module.get<BooksController>(BooksController);
	});

	it('should be defined', () => {
		expect(controller).toBeDefined();
	});
});
