import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { BookEntity } from "entity/books.entity";
import { Repository } from "typeorm";

@Injectable()
export class BookSeedService {
   constructor(
      @InjectRepository(BookEntity)
      private bookRepository: Repository<BookEntity>,
   ) { }

   async seed(): Promise<void> {
      const book = this.bookRepository.create({
         title: "The Design of Everyday Things",
         author: "Don Norman",
         publisher: "Don Norman",
         description: "Book explaining about how to design a useful product ",
      });

      await this.bookRepository.save(book);
   }
}