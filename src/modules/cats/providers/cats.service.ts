import { Model } from 'mongoose';
import { Injectable, Inject } from '@nestjs/common';

import { CAT_MODEL_TOKEN } from '../constants';
import { Cat } from '../interfaces/cat.interface';
import { CreateCatDto } from '../dto/create-cat.dto';

@Injectable()
export class CatsService {
    constructor(
        @Inject(CAT_MODEL_TOKEN) private readonly catsModel: Model<Cat>
    ) {}

    public async create(createCatDto: CreateCatDto): Promise<Cat> {
        const createdCat = new this.catsModel(createCatDto);

        return await createdCat.save();
    }

    public async findAll(): Promise<Cat[]> {
        return await this.catsModel.find().exec();
    }
}