import { SlashCommandBuilder, EmbedBuilder } from 'discord.js';

export const data = new SlashCommandBuilder()
    .setName("help")
    .setDescription("Provides information about the bot's commands.");

export async function execute(interaction: any) {
    const embed = new EmbedBuilder()
        .setColor(0x0099FF)
        .setTitle('Dictionary | Help')
        .setURL('https://github.com/1neskk/dictionary-bot')
        .setDescription('Here are the commands you can use:')
        .addFields(
            { name: '/define', value: 'Provides the definition of a word.' },
            { name: '/synonym', value: 'Provides synonyms for a word.' },
            { name: '/antonym', value: 'Provides antonyms for a word.' },
            { name: '/user', value: 'Provides information about the user.' },
            { name: '/server', value: 'Provides information about the server.' },
            { name: '/help', value: 'Provides information about the bot\'s commands.' },
        )
        .setTimestamp()
        .setFooter({ text: 'Bot Help' });

    await interaction.reply({ embeds: [embed] });
}
