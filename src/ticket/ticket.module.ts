import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TicketService } from './ticket.service';
import { TicketController } from './ticket.controller';
import { TicketSchema } from './schemas/ticket.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Ticket', schema: TicketSchema }])],
  controllers: [TicketController],
  providers: [TicketService]
})
export class TicketModule {}
