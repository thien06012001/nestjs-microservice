import { Controller, Inject } from "@nestjs/common";
import { ClientProxy, EventPattern, Payload } from "@nestjs/microservices";
import { CreatePaymentDto } from "./dtos/createPayment.dto";
import { PaymentsService } from "./payments.service";

@Controller()
export class PaymentsMicroservicesController {
    constructor(@Inject("NATS_SERVICE") private natsClient: ClientProxy, private paymentsService: PaymentsService) { }
    @EventPattern('createPayment')
    async createPayment(@Payload() createPaymentDto: CreatePaymentDto) {
        console.log("Data from http gate way api to payment service: ", createPaymentDto)
        const newPayment = await this.paymentsService.createPayment(createPaymentDto)
        if (newPayment) {
            await this.natsClient.send({ cmd: 'paymentCreated' }, newPayment)
        }
    }
}