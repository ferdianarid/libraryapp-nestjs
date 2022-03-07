import { registerAs } from "@nestjs/config";
import { BookDetailEntity } from "entity/books.detail.entity";
import { BookEntity } from "entity/books.entity";

export default registerAs("database", () => ({
	type: "mysql",
	host: process.env.DATABASE_HOST,
	port: process.env.DATABASE_PORT || 8888,
	username: process.env.DATABASE_USERNAME,
	password: process.env.DATABASE_PASSWORD,
	database: process.env.DATABASE_NAME,
	syncronize: false,
	entities: [BookEntity, BookDetailEntity],
}))