import { Client, Collection } from "discord.js";
import { loadEvents } from "../handlers/event";
import "colors";

interface Bot {
  commands: Collection<string, any>;
  buttons: Collection<string, any>;
  modals: Collection<string, any>;
  channel: Collection<string, any>;
  string: Collection<string, any>;
  mention: Collection<string, any>;
  role: Collection<string, any>;
  userContext: Collection<string, any>;
}

class Bot extends Client {
  constructor() {
    super({
      intents: 3276799
    });

    this.commands = new Collection();
    this.buttons = new Collection();
    this.modals = new Collection();
    this.channel = new Collection();
    this.string = new Collection();
    this.mention = new Collection();
    this.role = new Collection();
    this.userContext = new Collection();

    loadEvents(this);
  }


  async start() {
    if (!process.env.BOT_TOKEN) {
      console.error('[ Client ] Bot token not configured. Set the token in .env'.red);
      return;
    }

    this.login(process.env.BOT_TOKEN)
      .catch((error) => {
        console.error('[ Client ] Error starting the bot:'.red, error);
      });
  }
}

export { Bot };