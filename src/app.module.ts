import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { CatsModule } from './modules/cats/cats.module';

@Module({
    imports: [
        CatsModule,
        MongooseModule.forRoot(process.env.MONGO_URI)
    ]
})
export class AppModule {}
