import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ResponseUsers } from 'dto/response.users.dto';
import { UsersEntity } from 'entity/users.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {
    constructor(@InjectRepository(UsersEntity) private _userRepository: Repository<UsersEntity>) { }

    async RegisterUsers(data: Object): Promise<ResponseUsers> {
        const users = this._userRepository.save(data)

        return {
            status: 200,
            method: "POST",
            api_version: "v1",
            data: {
                message: "Users Successfully Registered",
                data: users
            }
        }
    }
}
