import * as mongoose from 'mongoose';
const Schema = mongoose.Schema;

export const TicketSchema = new mongoose.Schema({
    hall_id:{
        type: String,
        ref: 'Hall',
        required: true,
     },
     user_id:{
        type: String,
        ref: 'User',
        required: true,
     },
     from: {
        type: Date,
        required: true,
     },
     to: {
        type: Date,
        required: true,
     },
     title: {
        type: String,
        required: false,
        default: null
     },
});