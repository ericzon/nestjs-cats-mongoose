import { format, transports } from 'winston';

import { APP_NAME, PROCESS_PID, LOG_LEVEL, dateFormat } from '../constants';

const customFormat = (tag) => {
    return format.printf((info) => {
        return `${info.label} Message: ${info.timestamp} ${info.level} [${ PROCESS_PID }] ${tag}: ${info.message}`;
    });
};

const formatConfigs = (tag) => {
    return [
        format.label({ label: `${ APP_NAME }` }),
        format.timestamp({ format: dateFormat }),
        format.colorize(true),
        format.splat(),
        customFormat(tag)
    ];
};

export const loggerSettings = (tag) => {
    return {
        transports: [
            new transports.Console()
        ],
        level: LOG_LEVEL,
        format: format.combine(...formatConfigs(tag))
    };
};
