import express, { Express } from 'express';
import { config } from './app.config';
import { logger } from './shared/modules/Logger/Logger.module';

export class App {
	app: Express;

	constructor() {
		this.app = express();
	}

	init() {
		this.app.listen(config.PORT, () => {
			logger.log(`[App]: server start on ${config.PORT} port...`);
		});
	}
}
