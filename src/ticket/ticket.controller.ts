import { 
  Controller, 
  Get, 
  Post, 
  Delete, 
  Put, 
  Body, 
  Param, 
  UseGuards } from '@nestjs/common';
import { CreateTicketDto } from './dto/create-ticket';
import { TicketService } from './ticket.service';
import { Ticket } from './interfaces/ticket.interface';
import { AuthGuard } from '@nestjs/passport';
import { FindByParams } from './requests/FindByParams';

@Controller('tickets')
export class TicketController {
    constructor(private readonly ticketService: TicketService) {}

    @Post()
    @UseGuards(AuthGuard('jwt'))
    async create(@Body() createTicketDto: CreateTicketDto) : Promise <Ticket> {
      return this.ticketService.create(createTicketDto);
    }
    
    @Delete(':id')
    @UseGuards(AuthGuard('jwt'))
    async delete(@Param('id') id ) : Promise <Ticket>{
      return this.ticketService.delete(id);
    }

    @Put(':id')
    @UseGuards(AuthGuard('jwt'))
    async update(@Body() updateTicketDto: CreateTicketDto, @Param('id') id ) : Promise <Ticket>{
      return this.ticketService.update(id, updateTicketDto);
    }
    
    @Get(':from/:to')
    async period(@Param() params: FindByParams) : Promise <Ticket>{
      return this.ticketService.period(params.from, params.to);
    }

    @Get()
    async findAll(): Promise<Ticket[]> {
      return this.ticketService.findAll();
    }

}
