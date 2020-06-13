import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { HallService } from './hall.service';
import { HallController } from './hall.controller';
import { HallSchema } from './schemas/hall.schema';
import { TicketSchema } from '../ticket/schemas/ticket.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Hall', schema: HallSchema }]),
    MongooseModule.forFeature([{ name: 'Ticket', schema: TicketSchema }])
  ],
  controllers: [HallController],
  providers: [HallService]
})
export class HallModule {}
