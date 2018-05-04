import * as dotenv from 'dotenv';
import { NestFactory } from '@nestjs/core';

import { PORT } from './settings';
import { AppModule } from './app.module';

declare const module: any;

(async () => {
    const result = dotenv.config();

    if (result.error) {
        throw result.error;
    }

    const app = await NestFactory.create(AppModule);

    await app.listen(PORT);

    if (module.hot) {
        module.hot.accept();
        module.hot.dispose(() => app.close());
    }
})();
