import * as mongoose from 'mongoose';

export const HallSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description:{
        type: String,
        required: true
    },
    imageURL:{
        type: String,
        default: ""
    }
});