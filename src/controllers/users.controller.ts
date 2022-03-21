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

        try {
            const hashPassword = await bcrypt.hash(password, 12)
            const hashConfirmPassword = await bcrypt.hash(confirm_password, 12)

            const user = {
                username, name, email, password: hashPassword, confirm_password: hashConfirmPassword
            }

            const newUser = this.usersService.RegisterUsers(user)

            return {
                status: 200,
                method: "POST",
                api_version: "v1",
                message: "Successfully create user",
                data: { username, name, email }
            }
        } catch (error) {
            return error.message
        }
    }
}
