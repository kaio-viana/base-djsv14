import { Bot } from "../../structures/Client";
import {
    EmbedBuilder,
    Colors,
    ActionRowBuilder,
    ButtonBuilder,
    ButtonStyle,
    ButtonInteraction
} from "discord.js";

const latencyButton = {
    data: {
        name: "latencyButton"
    },
    async execute(interaction: ButtonInteraction, client: Bot) {
        return await interaction.update({
            embeds: [
                new EmbedBuilder()
                    .setTitle("🏓 Pong!")
                    .setDescription(`💢 **Ping**: \`${client.ws.ping}\`ms`)
                    .setColor(Colors.Red)
            ], components: []
        })
    }
};

const { data, execute } = latencyButton;
export { data, execute };