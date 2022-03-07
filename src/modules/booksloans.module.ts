import { Module } from "@nestjs/common";
import { BookLoansService } from "services/booksloans.service";

@Module({
   providers: [BookLoansService],
})
export class BookLoansModule { }