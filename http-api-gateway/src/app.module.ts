import { Module } from '@nestjs/common';
import { UserModule } from './users/users.module';
import { PaymentsModule } from './payments/payments.module';
@Module({
  imports: [UserModule, PaymentsModule],
  controllers: [],
  providers: [],
})
export class AppModule { }
