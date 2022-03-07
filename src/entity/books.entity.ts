import { Column, CreateDateColumn, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm"
import { BookDetailEntity } from "./books.detail.entity"

@Entity({ name: "books" })
export class BookEntity {
       @PrimaryGeneratedColumn()
       id: number

       @Column()
       title: string

       @Column()
       author: string

       @Column()
       publisher: string

       @Column()
       description: string

       @CreateDateColumn({
              type: 'timestamp',
              default: () => 'CURRENT_TIMESTAMP(6)',
       })
       public created_at: Date;

       @UpdateDateColumn({
              type: 'timestamp',
              default: () => 'CURRENT_TIMESTAMP(6)',
              onUpdate: 'CURRENT_TIMESTAMP(6)',
       })
       public updated_at: Date;

       @OneToOne(() => BookDetailEntity)
       @JoinColumn()
       book: BookDetailEntity;
}