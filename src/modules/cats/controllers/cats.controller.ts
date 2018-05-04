import { Body, Controller, Get, Post, UsePipes, ValidationPipe } from '@nestjs/common';

import { Cat } from '../interfaces/cat.interface';
import { CreateCatDto } from '../dto/create-cat.dto';
import { CatsService } from '../providers/cats.service';

@Controller('cats')
export class CatsController {
    constructor(private readonly service: CatsService) {}

    @Post()
    @UsePipes(new ValidationPipe())
    public async create(@Body() createCatDto: CreateCatDto) {
        await this.service.create(createCatDto);
    }

    @Get()
    public async findAll(): Promise<Cat[]> {
        return await this.service.findAll();
    }
}
