import { Module } from "@nestjs/common";
import { NatsClientModule } from "src/nats-client/nats.client.module";
import { PaymentsMicroservicesController } from "./payments.controller";
import { PaymentsService } from "./payments.service";
import { Payment } from "src/typeorm/entities/Payment";
import { TypeOrmModule } from "@nestjs/typeorm";
import { User } from "src/typeorm/entities/User";

@Module({
    imports: [TypeOrmModule.forFeature([User, Payment]), NatsClientModule],
    controllers: [PaymentsMicroservicesController],
    providers: [PaymentsService]
})

export class PaymentsModule { }