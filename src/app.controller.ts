import { Controller, Get } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { AppService } from './app.service';


@ApiTags("home")
@Controller({ path: "home" })
export class AppController {
	constructor(private readonly _appService: AppService) { }

	@Get()
	homepage(): Object {
		return this._appService.homepage();
	}
}
