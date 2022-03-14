import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { UsersEntity } from "entity/users.entity";
import { Repository } from "typeorm";

@Injectable()
export class UsersSeedServices {
    constructor(
        @InjectRepository(UsersEntity)
        private usersServices: Repository<UsersEntity>,
    ) { }

    async usersSeed(): Promise<void> {
        const users = this.usersServices.create([
            {
                username: "ferdian",
                name: "ferdian ahmad r",
                email: "ferdianengineer@microsoft.com",
                password: "microsoft",
                confirm_password: "microsoft"
            }
        ]);

        await this.usersServices.save(users);
    }
}