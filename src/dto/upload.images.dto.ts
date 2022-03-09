import { ApiProperty } from "@nestjs/swagger";

export class UploadImagesDto {
	@ApiProperty()
	name: string
}