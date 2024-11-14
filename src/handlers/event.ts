import { Bot } from "../structures/Client";
import { getFiles } from "../functions/getFiles";
import path from "path";

async function loadEvents(client: Bot) {
    const eventPath = path.resolve(__dirname, '../events');
    const files = getFiles(eventPath);

    for (const file of files) {
        const event = require(path.resolve(file));

        if (event.once) {
            client.once(event.name, (...args) => event.execute(...args, client));
        } else {
            client.on(event.name, (...args) => event.execute(...args, client));
        }
    }
}

export { loadEvents };