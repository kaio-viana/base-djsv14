import { Bot } from "../structures/Client";
import { getFiles } from "../functions/getFiles";
import path from "path";
async function loadCommands(client: Bot) {
    const commandsArray = [];

    const commandPath = path.resolve(__dirname, '../commands');
    const files = getFiles(commandPath);

    for (const file of files) {
        const command = require(path.resolve(file));

        client.commands.set(command.data.name, command);
        commandsArray.push(command.data.toJSON ? command.data.toJSON() : command.data);
    }

    await client.application?.commands.set(commandsArray);
}

export { loadCommands };