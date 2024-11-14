import { Bot } from "./src/structures/Client";
import "dotenv/config";
import "colors";

const client = new Bot();

client.on('error', (error: Error) => {
    console.log(error);
});

process.on('unhandledRejection', (reason: any, p: Promise<any>) => {
    console.log('[ Client ] Error Detected.'.red);
    console.log(reason, p);
});

process.on('uncaughtExceptionMonitor', (err: Error, origin: string) => {
    console.log('[ Client ] Error Detected.'.red);
    console.log(err, origin);
});

process.on('uncaughtException', (err: Error, origin: string) => {
    console.log('[ Client ] Error Detected.'.red);
    console.log(err, origin);
});

client.start();