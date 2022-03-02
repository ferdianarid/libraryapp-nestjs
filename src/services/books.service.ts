import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FindConditions, Repository } from 'typeorm';
import { BookEntity } from 'entity/books.entity';
import { CreateBookDto } from 'dto/create.books.dto';
import { FilterBookDto } from 'dto/filter.books.dto';

@Injectable()
export class BookService {
       constructor(@InjectRepository(BookEntity) private bookRepository: Repository<BookEntity>) { }

       async getBooks(filterBookDto: FilterBookDto): Promise<BookEntity[]> {
              let filter: FindConditions<BookEntity> = {}
              if (filterBookDto.title) {
                     filter = { title: filterBookDto.title }
              }
              const books = await this.bookRepository.find(filter)
              return books
       }

       async createBooks(bookData: CreateBookDto): Promise<BookEntity> {
              const bookEntity = this.bookRepository.create(bookData)
              console.log(bookEntity)
              return this.bookRepository.save(bookData)
       }

       async findOne(id: number): Promise<BookEntity> {
              return this.bookRepository.findOne(id)
       }
}