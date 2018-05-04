import * as mongoose from 'mongoose';

import { DB_CONNECTION_TOKEN } from '../constants';
import { LoggerService } from '../../../utils/logger';

const logger = new LoggerService('cats.provider');

export const databaseProviders = [
    {
        provide: DB_CONNECTION_TOKEN,
        useFactory: async (): Promise<typeof mongoose> => {

            logger.debug('providing connection (factory)');
            logger.debug(`connecting to: ${process.env.MONGO_URI}`);

            return await mongoose.connect(process.env.MONGO_URI);
        }
    }
];
