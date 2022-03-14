import { NestFactory } from "@nestjs/core";
import { BookSeedService } from "services/books.seed.service";
import { SeedModule } from "modules/seed.module";
import { UsersSeedServices } from "services/users.seed.service";

async function bootstrap() {
   const appContext = await NestFactory.createApplicationContext(SeedModule);
   const bookSeeder = appContext.get(BookSeedService);
   const usersSeeder = appContext.get(UsersSeedServices)

   try {
      // await bookSeeder.seed();
      await usersSeeder.usersSeed()
      console.log(`Successfully Seeding`);
   } catch (error) {
      console.log(`Error is ${error}`);
   } finally {
      await appContext.close();
      console.log(`Seeding Process Closed`);
   }
}

bootstrap();