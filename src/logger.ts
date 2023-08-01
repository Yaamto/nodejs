const { format, createLogger, transports } = require("winston");
const { combine, timestamp, label, printf, prettyPrint } = format;
const APINAME = "NodeJs-MongoDB-M1-IW";

const logger = createLogger({
    level: "debug",
    format: combine(
        label({ label: APINAME }),
        timestamp({
            format: "YYYY-MMM-DD HH:mm:ss",
        }),
        prettyPrint()
    ),
    transports: [
        new transports.File({
            level: "error",
            filename: "./logs/error.log",
        }),
        new transports.File({
            level: "info",
            filename: "./logs/info.log",
        }),
        new transports.File({
            level: "debug",
            filename: "./logs/debug.log",
        }),

        new transports.Console(),
    ],
});

module.exports = logger;
