import * as dotenv from 'dotenv';
import { NestFactory } from '@nestjs/core';

import { PORT } from './settings';
import { AppModule } from './app.module';
import { LoggerService } from './utils/logger';

(async () => {
    const result = dotenv.config();

    if (result.error) {
        throw result.error;
    }

    const logger = new LoggerService('main');
    const app = await NestFactory.create(AppModule, { logger });

    logger.info(`Application running on port ${PORT}`);

    await app.listen(PORT);
})();
