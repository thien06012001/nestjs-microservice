import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { User } from "src/typeorm/entities/User";
import { Repository } from "typeorm";
import { CreateUserDto } from "./dtos/createUser.dto";

@Injectable()
export class UsersService {
    constructor(@InjectRepository(User) private usersRepository: Repository<User>) { }
    createUser(createUserDto: CreateUserDto) {
        const newUser = this.usersRepository.create(createUserDto)
        return this.usersRepository.save(newUser)
    }
    async getUserById(userId: string) {
        const user = await this.usersRepository.findOne({
            where: {
                id: userId
            },
            relations: ['payments']
        })
        console.log('user', user)
        if (user) { return user }
        return null
    }
}