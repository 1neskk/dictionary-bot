import { SlashCommandBuilder } from 'discord.js';

export const data = new SlashCommandBuilder()
    .setName("user")
    .setDescription("Provides user information.");

export async function execute(interaction: any) {
    const user = interaction.user;
    const member = interaction.member;
    const userInfo = `This command was invoked by ${user.username}, who joined the server on ${member.joinedAt}.`;
    await interaction.reply(userInfo);
}
