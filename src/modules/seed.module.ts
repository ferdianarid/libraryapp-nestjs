import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BookEntity } from "entity/books.entity";
import databaseConfig from "config/database.config";
import { BookSeedService } from "services/books.seed.service";
import { UsersEntity } from 'entity/users.entity';
import { UsersSeedServices } from 'services/users.seed.service';

@Module({
   imports: [
      ConfigModule.forRoot({
         load: [databaseConfig],
         isGlobal: true,
      }),
      TypeOrmModule.forRootAsync({
         imports: [ConfigModule],
         useFactory: (configService: ConfigService) => {
            const options = configService.get("database");
            console.log(options);

            return options;
         },
         inject: [ConfigService],
      }),
      TypeOrmModule.forFeature([BookEntity, UsersEntity]),
   ],

   providers: [BookSeedService, UsersSeedServices],
})
export class SeedModule { }