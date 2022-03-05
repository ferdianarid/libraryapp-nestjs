import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from 'app.controller';
import { AppService } from 'app.service';
import { BooksModule } from 'modules/books.module';
import { ImagesModule } from 'modules/images.module';

@Module({
  imports: [BooksModule, TypeOrmModule.forRoot(), ImagesModule],
  controllers: [AppController],
  providers: [AppService],
})

export class AppModule { }