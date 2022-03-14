import { ApiProperty } from "@nestjs/swagger"

export class ResponseUsers {
    @ApiProperty()
    status: number

    @ApiProperty()
    method: string

    @ApiProperty()
    api_version: string

    @ApiProperty()
    data: object
}