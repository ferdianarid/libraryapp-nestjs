import { ApiProperty } from "@nestjs/swagger"

export class CreateBookDto {
       @ApiProperty()
       id: number

       @ApiProperty()
       title: string

       @ApiProperty()
       author: string

       @ApiProperty()
       publisher: string

       @ApiProperty()
       description: string

       @ApiProperty()
       created_at?: Date

       @ApiProperty()
       updated_at?: Date
}