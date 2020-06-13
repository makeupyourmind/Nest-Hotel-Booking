import { Injectable, HttpException } from '@nestjs/common';
import { Model } from 'mongoose';
import { Ticket } from '../ticket/interfaces/ticket.interface';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class DevService {
    constructor(@InjectModel('Ticket') private readonly ticketModel: Model<Ticket>) {}

    async delete() : Promise <any> {
          try{
            return await this.ticketModel().collection.drop();
          }
          catch{
            throw new HttpException({
                error: "Collection doesn't exist",
            }, 500);
          }
          
     }
}
