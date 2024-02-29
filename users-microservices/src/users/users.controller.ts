import { Controller } from "@nestjs/common";
import { MessagePattern, Payload } from "@nestjs/microservices";
import { CreateUserDto } from "./dtos/createUser.dto";
import { UsersService } from "./users.service";

@Controller()
export class UsersMicroservicesController {

    constructor(private usersService: UsersService) { }

    @MessagePattern({ cmd: 'createUser' })
    createUser(@Payload() data: CreateUserDto) {
        return this.usersService.createUser(data)
    }

    @MessagePattern({ cmd: 'getUserById' })
    async getUserById(@Payload() data) {
        const { userId } = data
        console.log("UserId sent from payment service: ", userId)
        return await this.usersService.getUserById(userId)
    }
    @MessagePattern('paymentCreated')
    paymentCreated(@Payload() data: any) {
        console.log(data)
        return data
    }
}