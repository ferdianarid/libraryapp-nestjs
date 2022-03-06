import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from 'app.controller';
import { AppService } from 'app.service';
import { CreateBooksMiddlewares, DeleteBooksMiddleware, GetBooksMiddleware, UpdateBooksMiddleware } from 'common/middlewares/books.middleware';
import { BooksModule } from 'modules/books.module';
import { ImagesModule } from 'modules/images.module';
import { BooksController } from './books/books.controller';

@Module({
	imports: [BooksModule, TypeOrmModule.forRoot(), ImagesModule],
	controllers: [AppController, BooksController],
	providers: [AppService],
})

export class AppModule implements NestModule {
	configure(consumer: MiddlewareConsumer) {
		consumer.apply(CreateBooksMiddlewares).forRoutes({ path: "v1/books", method: RequestMethod.POST })
		consumer.apply(GetBooksMiddleware).forRoutes({ path: "v1/books/*", method: RequestMethod.GET })
		consumer.apply(UpdateBooksMiddleware).forRoutes({ path: "v1/books/*", method: RequestMethod.PUT })
		consumer.apply(DeleteBooksMiddleware).forRoutes({ path: "v1/books/*", method: RequestMethod.DELETE })
	}
}