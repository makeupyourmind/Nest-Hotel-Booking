import { Document } from 'mongoose';

export interface Hall extends Document {
    title: string
    description: string
    imageURL: string
}