import * as mongoose from 'mongoose';

export interface Cat extends mongoose.Document {
    readonly name: string;
    readonly age: number;
    readonly breed: string;
}
