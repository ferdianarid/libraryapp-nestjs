import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BooksController } from 'controllers/books.controller';
import { BookEntity } from 'entity/books.entity';
import { BookService } from 'services/books.service';

@Module({
	imports: [TypeOrmModule.forFeature([BookEntity])],
	controllers: [BooksController],
	providers: [BookService]
})
export class BooksModule { }