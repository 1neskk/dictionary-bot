import { SlashCommandBuilder } from 'discord.js';

export const data = new SlashCommandBuilder()
    .setName("server")
    .setDescription("Provides server information.");

export async function execute(interaction: any) {
    const guild = interaction.guild;
    const serverInfo = `This command was invoked in the server ${guild.name}, which has ${guild.memberCount} members.`;
    await interaction.reply(serverInfo);
}
