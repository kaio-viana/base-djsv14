import { Bot } from "../../../structures/Client";
import {
    ChatInputCommandInteraction,
    SlashCommandBuilder,
    EmbedBuilder,
    Colors,
    ActionRowBuilder,
    ButtonBuilder,
    ButtonStyle
} from "discord.js";

const command = {
    data: new SlashCommandBuilder()
        .setName("ping")
        .setDescription("[ Info ] - Shows my latency")
        .setDescriptionLocalizations({ "pt-BR": "[ Info ] - Mostra minha latência" })
        .setContexts(0),
    async execute(interaction: ChatInputCommandInteraction, client: Bot) {
        return interaction.reply({
            embeds: [
                new EmbedBuilder()
                    .setTitle("🏓 Pong!")
                    .setColor(Colors.Red)
            ],
            components: [
                new ActionRowBuilder<ButtonBuilder>()
                    .setComponents(
                        new ButtonBuilder()
                            .setCustomId("latencyButton")
                            .setLabel("💢 Ver Latência")
                            .setStyle(ButtonStyle.Secondary)
                    )
            ],
            ephemeral: true
        });
    }
};

const { data, execute } = command;
export { data, execute };