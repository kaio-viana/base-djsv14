import { Bot } from "../structures/Client";
import { getFiles } from "../functions/getFiles";
import path from "path";

async function loadButtons(client: Bot) {

    const buttonPath = path.resolve(__dirname, '../buttons');
    const files = getFiles(buttonPath);

    for (const file of files) {
        const button = require(path.resolve(file));

        client.buttons.set(button.data.name, button);
    }
}

export { loadButtons };