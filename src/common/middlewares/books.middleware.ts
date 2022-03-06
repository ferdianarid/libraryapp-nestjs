import { Injectable, NestMiddleware } from "@nestjs/common";
import { Request, Response, NextFunction } from "express"


@Injectable()
export class CreateBooksMiddlewares implements NestMiddleware {
       use(request: Request, response: Response, next: NextFunction) {
              console.log(`Middleware : Successfully Create Books .....`)
              // Add more middleware
              next()
       }
}

@Injectable()
export class GetBooksMiddleware implements NestMiddleware {
       use(request: Request, response: Response, next: NextFunction) {
              console.log(`Middleware : Successfully Get All Book .....`)
              // Add more middleware
              next()
       }
}

@Injectable()
export class UpdateBooksMiddleware implements NestMiddleware {
       use(request: Request, response: Response, next: NextFunction) {
              console.log(`Middleware : Successfully Update Book .....`)
              // Add more middleware
              next()
       }
}

@Injectable()
export class DeleteBooksMiddleware implements NestMiddleware {
       use(request: Request, response: Response, next: NextFunction) {
              console.log(`Middleware : Successfully Delete Book .....`)
              // Add more middleware
              next()
       }
}