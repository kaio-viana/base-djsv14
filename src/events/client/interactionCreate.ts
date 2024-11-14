import { Events, BaseInteraction } from "discord.js";
import { Bot } from "../../structures/Client";
import "colors";

const interactionCreateEvent = {
    name: Events.InteractionCreate,
    async execute(interaction: BaseInteraction, client: Bot) {
        if (interaction.isChatInputCommand()) {
            const command = client.commands.get(interaction.commandName);

            if (!command) {
                console.log(`[ Error ] Command not found: ${interaction.commandName}, ${interaction}`.red);
                return interaction.reply({ content: `❌ Command \`${interaction.commandName}\` not found.`, ephemeral: true });
            }

            try {
                command.execute(interaction, client);
            } catch (error) {
                console.log(`[ Error ] Command Error: ${error}`.red);
                return interaction.reply({ content: '❌ Command Error, Try Again.', ephemeral: true });
            }
        }
        
        if (interaction.isButton()) {
            const button = client.buttons.get(interaction.customId);

            if (interaction.customId == "confirmGeneratedPix") {
                return;
            }

            if (!button) {
                console.log(`[ Error ] Button not found: ${interaction.customId}, ${button}`.red);
                return interaction.reply({ content: `❌ Button \`${interaction.customId}\` not found.`, ephemeral: true });
            }

            try {
                button.execute(interaction, client);
            } catch (error) {
                console.log(`[ Error ] Button Error: ${error}`.red);
                return interaction.reply({ content: '❌ Button Error, Try Again.', ephemeral: true });
            }
        }

        if (interaction.isModalSubmit()) {
            const modal = client.modals.get(interaction.customId);

            if (!modal) {
                console.log(`[ Error ] Modal not found: ${interaction.customId}, ${modal}`.red);
                return interaction.reply({ content: `❌ Modal \`${interaction.customId}\` not found.`, ephemeral: true });
            }

            try {
                modal.execute(interaction, client);
            } catch (error) {
                console.log(`[ Error ] Modal Error: ${error}`.red);
                return interaction.reply({ content: '❌ Modal Error, Try Again.', ephemeral: true });
            }
        }

        if (interaction.isChannelSelectMenu()) {
            const channel = client.channel.get(interaction.customId);

            if (!channel) {
                console.log(`[ Error ] Channel Select Menu not found: ${interaction.customId}, ${channel}`.red);
                return interaction.reply({ content: `❌ Channel Select Menu \`${interaction.customId}\` not found.`, ephemeral: true });
            }

            try {
                channel.execute(interaction, client);
            } catch (error) {
                console.log(`[ Error ] Channel Select Menu Error: ${error}`.red);
                return interaction.reply({ content: '❌ Channel Select Menu Error, Try Again.', ephemeral: true });
            }
        }

        if (interaction.isMentionableSelectMenu()) {
            const mention = client.mention.get(interaction.customId);

            if (!mention) {
                console.log(`[ Error ] Mention Select Menu not found: ${interaction.customId}, ${mention}`.red);
                return interaction.reply({ content: `❌ Mention Select Menu \`${interaction.customId}\` not found.`, ephemeral: true });
            }

            try {
                mention.execute(interaction, client);
            } catch (error) {
                console.log(`[ Error ] Mention Select Menu Error: ${error}`.red);
                return interaction.reply({ content: '❌ Mention Select Menu Error, Try Again.', ephemeral: true });
            }
            
        }

        if (interaction.isRoleSelectMenu()) {
            const role = client.role.get(interaction.customId);

            if (!role) {
                console.log(`[ Error ] Role Select Menu not found: ${interaction.customId}, ${role}`.red);
                return interaction.reply({ content: `❌ Role Select Menu \`${interaction.customId}\` not found.`, ephemeral: true });
            }

            try {
                role.execute(interaction, client);
            } catch (error) {
                console.log(`[ Error ] Role Select Menu Error: ${error}`.red);
                return interaction.reply({ content: '❌ Role Select Menu Error, Try Again.', ephemeral: true });
            }
        }

        if (interaction.isStringSelectMenu()) {
            const string = client.string.get(interaction.customId);

            if (!string) {
                console.log(`[ Error ] String Select Menu not found: ${interaction.customId}, ${string}`.red);
                return interaction.reply({ content: `❌ String Select Menu \`${interaction.customId}\` not found.`, ephemeral: true });
            }


            try {
                string.execute(interaction, client);
            } catch (error) {
                console.log(`[ Error ] String Select Menu Error: ${error}`.red);
                return interaction.reply({ content: '❌ String Select Menu Error, Try Again.', ephemeral: true });
            }
        }

        if (interaction.isUserContextMenuCommand()) {
            const userContext = client.commands.get(interaction.commandName);

            if (!userContext) {
                console.log(`[ Error ] Context Menu Command not found: ${interaction.commandName}, ${userContext}`.red);
                return interaction.reply({ content: `❌ Context Menu Command \`${interaction.commandName}\` not found.`, ephemeral: true });
            }

            try {
                userContext.execute(interaction, client);
            } catch (error) {
                console.log(`[ Error ] Context Menu Command Error: ${error}`.red);
                return interaction.reply({ content: '❌ Context Menu Command Error, Try Again.', ephemeral: true });
            }
        }
    }
};

const { name, execute } = interactionCreateEvent;
export { name, execute };