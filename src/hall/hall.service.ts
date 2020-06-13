import { Injectable, HttpException } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Hall } from './interfaces/hall.interface';
import { Ticket } from '../ticket/interfaces/ticket.interface';

@Injectable()
export class HallService {
    constructor(
        @InjectModel('Hall') private readonly hallModel: Model<Hall>,
        @InjectModel('Ticket') private readonly ticketModel: Model<Ticket>
    ) {}

    async create(hall: Hall): Promise<Hall> {
        try{
            const createdHall = new this.hallModel(hall);
            return await createdHall.save();
        }
        catch(e){
            throw new HttpException({
                error: e.message,
            }, 400);
        }
        
  }

    async deleteById(id : string): Promise <Hall>{    
        try{
            await this.ticketModel.deleteMany({hall_id: id})
            return await this.hallModel.findByIdAndRemove(id);
        }
        catch(e){
            throw new HttpException({
                error: e.message,
            }, 400);
        }      
    } 
    
    async delete(): Promise <Hall>{
        return await this.hallModel.remove({});
    } 

    async findAll(): Promise<Hall[]> {
        return await this.hallModel.find().exec();
    }

}
