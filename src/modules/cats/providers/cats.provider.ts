import { Connection } from 'mongoose';

import { CAT_MODEL_TOKEN } from '../constants';
import { CatSchema } from '../schemas/cat.schema';
import { LoggerService } from '../../../utils/logger';
import { DB_CONNECTION_TOKEN } from '../../database/constants';

const logger = new LoggerService('cats.provider');

export const catsProviders = [
    {
        provide: CAT_MODEL_TOKEN,
        useFactory: (connection: Connection) => {
            logger.debug('providing Cat model (factory)');

            return connection.model('Cat', CatSchema)
        },
        inject: [DB_CONNECTION_TOKEN],
    },
];