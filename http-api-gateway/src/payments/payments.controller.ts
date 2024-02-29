import { Body, Controller, Inject, Post } from "@nestjs/common";
import { ClientProxy } from "@nestjs/microservices";
import { CreatePaymentDto } from "./dtos/createPayment.dto";


@Controller('payments')
export class PaymentsController {
    constructor(@Inject('NATS_SERVICE') private natsClient: ClientProxy) { }
    @Post()
    async createPayment(@Body() createPaymentDto: CreatePaymentDto) {
        console.log('Data send from user: ', createPaymentDto)
        return await this.natsClient.send({ cmd: 'createPayment' }, createPaymentDto)
    }

}