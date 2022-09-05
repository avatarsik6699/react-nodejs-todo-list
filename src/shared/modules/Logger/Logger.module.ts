import { Logger as TsLogger } from 'tslog';
import { ILogger } from './Logger.interface';

class Logger implements ILogger {
	private logger: TsLogger;

	constructor() {
		this.logger = new TsLogger({
			displayInstanceName: false,
			displayLoggerName: false,
			displayFunctionName: false,
			displayFilePath: 'hidden',
		});
	}

	log = (...args: unknown[]) => {
		this.logger.info(...args);
	};

	err = (...args: unknown[]) => {
		this.logger.error(...args);
	};

	warn = (...args: unknown[]) => {
		this.logger.warn(...args);
	};
}

export const logger = new Logger();
