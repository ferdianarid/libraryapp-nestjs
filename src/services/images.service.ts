import { Injectable } from '@nestjs/common';
import { mockImagesData } from "apis"

@Injectable()
export class ImagesService {
	async getImages(): Promise<Object> {
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
