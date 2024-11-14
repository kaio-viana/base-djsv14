import { loadCommands } from "../../handlers/command";
import { loadButtons } from "../../handlers/button";
import { Bot } from "../../structures/Client";
import { ActivityType, Events } from "discord.js";
import mongoose from "mongoose";

const readyEvent = {
  name: Events.ClientReady,
  once: true,
  async execute(client: Bot) {
    console.log('| Source created by @kahxyz1');

    console.log('-'.black);

    console.log(`[ Client ] ${client.user?.username} is Online!`.green);
    if (process.env.MONGO_URL) {
      await mongoose.connect(process.env.MONGO_URI, { dbName: "Jarvis" });
      if (mongoose.connection.readyState === 1) {
        console.log(`[ Database ] Connected to Cluster!`.green);
      }
    }

    try {
      await loadCommands(client);
      await loadButtons(client);
    } catch (error) {
      console.log(`[ Error ] While Loading: ${error}`.red);
    }
  }
};

const { name, once, execute } = readyEvent;
export { name, once, execute };