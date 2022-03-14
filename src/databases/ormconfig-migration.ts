import databaseConfig from "config/database.config";
import { BookDetailEntity } from "entity/books.detail.entity";
import { BookEntity } from "entity/books.entity";
import { UsersEntity } from "entity/users.entity";

module.exports = {
	host: databaseConfig().host,
	type: "mysql",
	port: databaseConfig().port,
	username: databaseConfig().username,
	password: databaseConfig().password,
	database: databaseConfig().database,
	syncronize: false,
	entities: [BookEntity, BookDetailEntity, UsersEntity],
	migrations: ["src/databases/migrations/*.ts"],
	cli: {
		migrationsDir: "src/databases/migrations"
	}
}