import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersController } from 'controllers/users.controller';
import { UsersEntity } from 'entity/users.entity';
import { BookService } from 'services/books.service';
import { UsersService } from 'services/users.service';

@Module({
  imports: [TypeOrmModule.forFeature([UsersEntity])],
  controllers: [UsersController],
  providers: [UsersService]
})

export class UsersModule { }
