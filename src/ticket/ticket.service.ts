import { Injectable, HttpException } from '@nestjs/common';
import { Model } from 'mongoose';
import { Ticket } from './interfaces/ticket.interface';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class TicketService {
    constructor(@InjectModel('Ticket') private readonly ticketModel: Model<Ticket>) {}

    async create(ticket: Ticket): Promise<Ticket> {

        try{
            const createdTikcet = new this.ticketModel(ticket);
            return await createdTikcet.save();
        }
        catch(e){
            throw new HttpException({
                error: e.message,
            }, 400);
        }
        
    }
    
    
    async delete(id : string) : Promise<Ticket> {
        return await this.ticketModel.findByIdAndRemove(id);
    }

    async update(id : string, ticket: Ticket) : Promise<Ticket> {
        return await this.ticketModel.findByIdAndUpdate(id, ticket, {new : true});
    }

    async period(from: string, to: string) : Promise <Ticket> {
        return await this.ticketModel.find({
            from: from,
            to: to
        })
    }

    async findAll(): Promise<Ticket[]> {
        return await this.ticketModel.find().exec();
    }
    
}
