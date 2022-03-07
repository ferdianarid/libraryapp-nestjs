import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FindConditions, Repository } from 'typeorm';
import { BookEntity } from 'entity/books.entity';
import { CreateBookDto } from 'dto/create.books.dto';
import { FilterBookDto } from 'dto/filter.books.dto';
import { ResponseBook } from 'dto/response.books.dto';

@Injectable()
export class BookService {
	constructor(@InjectRepository(BookEntity) private bookRepository: Repository<BookEntity>) { }

	async getBooks(filterBookDto: FilterBookDto): Promise<any> {
		// default return is <BookEntity[]> 
		let filter: FindConditions<BookEntity> = {}
		if (filterBookDto.title) {
			filter = { title: filterBookDto.title }
		}
		const books = await this.bookRepository.find(filter)
		const response = {
			status: 200,
			method: "GET",
			api_version: "v1",
			data: {
				message: "Successfully Get All Books",
				data: books
			}
		}
		return response
	}

	async createBooks(bookData: CreateBookDto): Promise<BookEntity> {
		const bookEntity = this.bookRepository.create(bookData)
		console.log(bookEntity)
		return this.bookRepository.save(bookData)
	}

	async findOne(id: number): Promise<BookEntity> {
		try {
			const book = await this.bookRepository.findOne(id)
			return book
		} catch (error) {
			throw error
		}
	}

	async updateBooks(id: number, bookData: CreateBookDto): Promise<any> {
		await this.bookRepository.update(id, bookData)
		return bookData
	}

	async deleteBooks(id: number): Promise<ResponseBook> {
		const books = await this.bookRepository.findOne(id)
		const bookId = await this.bookRepository.delete(id)
		return {
			status: 200,
			api_version: "v1",
			method: "DELETE",
			data: {
				message: "Successfully Delete Book",
				data: books
			}
		}
	}

	bookControllerv2() {
		const response = {
			status: 200,
			method: "GET",
			api_version: "v2",
			data: {
				message: "Successfully Get All Books",
				data: [
					{
						id: 22,
						title: "React Design Pattern",
						author: "Ferdian",
						publisher: "Ferdian Corporation",
						description: "Book every programmer must have"
					}
				]
			}
		}
		return response
	}
}