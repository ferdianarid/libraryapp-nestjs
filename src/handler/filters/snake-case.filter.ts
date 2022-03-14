import { Injectable, NestInterceptor, ExecutionContext, CallHandler } from '@nestjs/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { BookEntity } from 'entity/books.entity';

export interface Response<T> {
    data: T;
}

@Injectable()
export class SnakeCaseInterceptor<T> implements NestInterceptor<T, Response<T>> {
    intercept(_context: ExecutionContext, next: CallHandler): Observable<Response<T>> {
        return next.handle().pipe(
            map((data) => {
                if (data instanceof BookEntity) {
                    return {
                        id: data.id,
                        title: data.title,
                        author: data.author,
                        publisher: data.publisher,
                        description: data.description,
                        created_at: data.created_at,
                        updated_at: data.updated_at,
                    };
                }

                if (Array.isArray(data) && data[0] instanceof BookEntity) {
                    return data.map((book) => ({
                        id: book.id,
                        title: book.title,
                        author: book.author,
                        publisher: book.publisher,
                        description: book.description,
                        created_at: book.create_at,
                        updated_at: book.update_at,
                    }));
                }
                return data;
            })
        );
    }
}