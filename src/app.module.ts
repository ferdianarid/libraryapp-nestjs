import { MiddlewareConsumer, Module, NestModule, RequestMethod } from "@nestjs/common";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { TypeOrmModule } from "@nestjs/typeorm";
import { AppController } from "app.controller";
import { AppService } from "app.service";
import { CreateBooksMiddlewares, DeleteBooksMiddleware, GetBooksMiddleware, UpdateBooksMiddleware } from "common/middlewares/books.middleware";
import configurations from "config/configurations";
import databaseConfig from "config/database.config";
import { BooksModule } from "modules/books.module";
import { ImagesModule } from "modules/images.module";
import { BookLoansService } from "services/booksloans.service";
import { BookLoansModule } from "modules/booksloans.module";

@Module({
	imports: [ConfigModule.forRoot({ load: [configurations, databaseConfig], isGlobal: true }), TypeOrmModule.forRootAsync({
		imports: [ConfigModule],
		useFactory: (configService: ConfigService) => {
			const options = configService.get("database");
			console.log(options);

			return options;
		},
		inject: [ConfigService],
	}), BooksModule, ImagesModule, BookLoansModule],
	controllers: [AppController],
	providers: [AppService, BookLoansService],
})

export class AppModule implements NestModule {
	configure(consumer: MiddlewareConsumer) {
		consumer.apply(CreateBooksMiddlewares).forRoutes({ path: "v1/books", method: RequestMethod.POST })
		consumer.apply(GetBooksMiddleware).forRoutes({ path: "v1/books/*", method: RequestMethod.GET })
		consumer.apply(UpdateBooksMiddleware).forRoutes({ path: "v1/books/*", method: RequestMethod.PUT })
		consumer.apply(DeleteBooksMiddleware).forRoutes({ path: "v1/books/*", method: RequestMethod.DELETE })
	}
}