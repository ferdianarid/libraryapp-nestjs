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

	async getBooks(filterBookDto: FilterBookDto): Promise<ResponseBook | BookEntity[]> {
		// default return is <BookEntity[]> 
		let filter: FindConditions<BookEntity> = {}
		if (filterBookDto.title) {
			filter = { title: filterBookDto.title }
		}
		const books = await this.bookRepository.find(filter)

		return {
			status: 200,
			method: "GET",
			api_version: "v1",
			data: {
				message: "Successfully Get All Books",
				data: books
			}
		}
	}

	async createBooks(bookData: CreateBookDto): Promise<ResponseBook> {
		// default return is <BookEntity>
		const bookEntity = this.bookRepository.create(bookData)
		console.log(bookEntity)
		const books = await this.bookRepository.save(bookData)

		return {
			status: 200,
			method: "POST",
			api_version: "v1",
			data: {
				message: "Successfully Created Books",
				data: books
			}
		}
	}

	async findOne(id: number): Promise<ResponseBook> {
		// default return <BookEntity[]>
		try {
			const book = await this.bookRepository.findOne(id)
			return {
				status: 200,
				method: "GET",
				api_version: "v1",
				data: {
					message: "Successfully Get Selected Book",
					data: book
				}
			}
		} catch (error) {
			throw error
		}
	}

	async updateBooks(id: number, bookData: CreateBookDto): Promise<ResponseBook> {
		await this.bookRepository.update(id, bookData)
		return {
			status: 200,
			method: "PUT",
			api_version: "v1",
			data: {
				message: "Successfully Update Selected Data",
				data: bookData
			}
		}
	}

	async deleteBooks(id: number): Promise<ResponseBook> {
		const books = await this.bookRepository.findOne(id)
		const bookId = await this.bookRepository.delete(id)
		return {
			status: 200,
			method: "DELETE",
			api_version: "v1",
			data: {
				message: "Successfully Delete Selected Book",
				data: books
			}
		}
	}

	async bookControllerv2(): Promise<ResponseBook> {
		return {
			status: 200,
			method: "GET",
			api_version: "v2",
			data: {
				message: "Successfully Get All Books",
				data: [
					{
						id: 22,
						title: "React Design Pattern",
						author: "Ferdian Ahmad R",
						publisher: "Ferdian Corporation",
						description: "Book every React Developer must have"
					}
				]
			}
		}
	}
}