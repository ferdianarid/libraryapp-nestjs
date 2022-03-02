import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import { BookEntity } from 'entity/books.entity';
import { BookService } from 'services/books.service';
import { FilterBookDto } from 'dto/filter.books.dto';
import { CreateBookDto } from 'dto/create.books.dto';

@Controller('books')
export class BooksController {
       constructor(private bookService: BookService) { }
       @Get()
       public async getBooks(@Query() filterBookDto: FilterBookDto): Promise<BookEntity[]> {
              return this.bookService.getBooks(filterBookDto)
       }

       @Get(":id")
       getOneBook(@Param() params): Promise<BookEntity> {
              return this.bookService.findOne(params.id)
       }

       @Post()
       async createBook(@Body() bodyData: CreateBookDto): Promise<BookEntity> {
              return this.bookService.createBooks(bodyData)
       }
}
