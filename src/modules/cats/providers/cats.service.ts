import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';

import { CatSchema } from '../schemas/cat.schema';
import { Cat } from '../interfaces/cat.interface';
import { CreateCatDto } from '../dto/create-cat.dto';

@Injectable()
export class CatsService {
    constructor(
        @InjectModel(CatSchema) private readonly catsModel: Model<Cat>
    ) {}

    public async create(createCatDto: CreateCatDto): Promise<Cat> {
        const createdCat = new this.catsModel(createCatDto);

        return await createdCat.save();
    }

    public async findAll(): Promise<Cat[]> {
        return await this.catsModel.find().exec();
    }
}