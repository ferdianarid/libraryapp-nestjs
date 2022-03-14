import { Body, Controller, Post, Version } from '@nestjs/common';
import { UsersService } from 'services/users.service';
import * as bcrypt from "bcrypt"
import { ApiTags } from '@nestjs/swagger';
import { UsersEntity } from 'entity/users.entity';
import { ResponseUsers } from 'dto/response.users.dto';

@Controller({ path: "users" })
export class UsersController {
    constructor(private readonly usersService: UsersService) { }

    @ApiTags("users v1")
    @Version("1")
    @Post("register")
    async RegisterUsers(
        @Body("username") username: string,
        @Body("name") name: string,
        @Body("email") email: string,
        @Body("password") password: string,
        @Body("confirm_password") confirm_password: string
    ): Promise<ResponseUsers> {

        const hashPassword = await bcrypt.hash(password, 12)
        const hashConfirmPassword = await bcrypt.hash(confirm_password, 12)

        return this.usersService.RegisterUsers({
            username, name, email, password: hashPassword, confirm_password: hashConfirmPassword
        })
    }
}
