import { Module } from '@nestjs/common';

import { CatsService } from './providers/cats.service';
import { catsProviders } from './providers/cats.provider';
import { DatabaseModule } from '../database/database.module';
import { CatsController } from './controllers/cats.controller';

@Module({
    imports: [
        DatabaseModule
    ],
    controllers: [
        CatsController
    ],
    providers: [
        ...catsProviders,
        CatsService
    ]
})
export class CatsModule {}
