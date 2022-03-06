import { Body, Controller, Delete, Get, Param, Post, Put, Query, Version } from '@nestjs/common';
import { BookEntity } from 'entity/books.entity';
import { BooksService } from 'services/books.service';
import { FilterBookDto } from 'dto/filter.books.dto';
import { CreateBookDto } from 'dto/create.books.dto';
import { ApiCreatedResponse, ApiTags } from '@nestjs/swagger';

@Controller({ path: "books" })
export class BooksController {
       constructor(private _bookService: BooksService) { }

       @ApiTags("books v1")
       @Version("1")
       @Get()
       public async getBooks(@Query() filterBookDto: FilterBookDto): Promise<BookEntity[]> {
              return this._bookService.getBooks(filterBookDto)
       }

       @ApiTags("books v1")
       @Get(":id")
       getOneBook(@Param() params): Promise<BookEntity> {
              return this._bookService.findOne(params.id)
       }

       @ApiTags("books v1")
       @Post()
       @ApiCreatedResponse({
              description: "The Book has been successfully created"
       })
       async createBook(@Body() bodyData: CreateBookDto): Promise<BookEntity> {
              return this._bookService.createBooks(bodyData)
       }

       @ApiTags("books v1")
       @Put(":id")
       public async updateBooks(@Param() params, @Body() data: CreateBookDto): Promise<BookEntity> {
              return this._bookService.updateBooks(params.id, data)
       }

       @ApiTags("books v1")
       @Delete(":id")
       public async deleteBooks(@Param() params): Promise<any> {
              return this._bookService.deleteBooks(params.id)
       }

       @ApiTags("books v2")
       @Version("2")
       @Get()
       public getBookControllerv2() {
              return this._bookService.bookControllerv2()
       }
}
