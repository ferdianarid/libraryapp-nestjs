import { ApiProperty } from "@nestjs/swagger"

export class ResponseBook {
       @ApiProperty()
       status: number

       @ApiProperty()
       method: string

       @ApiProperty()
       api_version: string

       @ApiProperty()
       data: object
}