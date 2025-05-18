import { SlashCommandBuilder, EmbedBuilder } from "discord.js";

export const data = new SlashCommandBuilder()
    .setName("synonym")
    .setDescription("Provides synonyms for a word.")
    .addStringOption(option =>
        option.setName("word")
            .setDescription("The word to find synonyms for.")
            .setRequired(true)
    );

export async function execute(interaction: any) {
    const word = interaction.options.getString("word");

    try {
        const response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`);
        if (!response.ok) {
            throw new Error("Word not found");
        }
        const data: any = await response.json();
        const synonyms = data[0].meanings[0].synonyms || ["No synonyms available"];

        const embed = new EmbedBuilder()
            .setColor(0x0099FF)
            .setTitle(`Synonyms for ${word}`)
            .setDescription(synonyms.join(", "))
            .setFooter({ text: "\nPowered by Dictionary API" });

        await interaction.reply({ embeds: [embed] });
    }
    catch (error) {
        console.error("Error fetching synonyms:", error);
        await interaction.reply({ content: "Sorry, I couldn't find synonyms for that word.", ephemeral: true });
    }
}
