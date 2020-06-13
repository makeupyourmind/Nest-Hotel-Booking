import { Document } from 'mongoose';

export interface Ticket extends Document {
     hall_id: string

     user_id: string

     from: Date
     
     to: Date
     
     title: string
}