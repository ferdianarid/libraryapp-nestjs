import { Injectable } from '@nestjs/common';
import { mockImagesData } from "apis"
import { ResponseImages } from 'dto/response.images.dto';

@Injectable()
export class ImagesService {
	async getImages(): Promise<ResponseImages> {
		return {
			status: 200,
			method: "GET",
			api_version: "v1",
			data: {
				message: "Successfully Get All Images",
				data: mockImagesData
			}
		}
	}
}
