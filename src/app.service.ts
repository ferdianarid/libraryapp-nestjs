import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
	homepage(): Object {
		const response = {
			status: 200,
			method: "GET",
			api_version: "v1",
			data: {
				message: "Homepage"
			}
		}
		return response
	}
}
