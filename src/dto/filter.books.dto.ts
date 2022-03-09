import { ApiProperty } from "@nestjs/swagger";

export class FilterBookDto {
       @ApiProperty()
       title?: string
}