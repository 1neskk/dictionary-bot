import { SlashCommandBuilder, EmbedBuilder } from "discord.js";

export const data = new SlashCommandBuilder()
    .setName("define")
    .setDescription("Provides the definition of a word.")
    .addStringOption(option =>
        option.setName("word")
            .setDescription("The word to define.")
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
        const phoneticText = data[0].phonetics.find((p: any) => p.text)?.text || "No phonetic available";

        const embed = new EmbedBuilder()
            .setColor(0x0099FF)
            .setTitle(`Definition of ${word}`)
            .setDescription(data[0].meanings[0].definitions[0].definition)
            .addFields(
                { name: "Phonetic", value: phoneticText, inline: false },
                { name: "Part of Speech", value: data[0].meanings[0].partOfSpeech, inline: true },
                { name: "Example", value: data[0].meanings[0].definitions[0].example || "No example available", inline: true }
            )
            .setFooter({ text: "\nPowered by Dictionary API"});

        await interaction.reply({ embeds: [embed] });
    }
    catch (error) {
        console.error("Error fetching definition:", error);
        await interaction.reply({ content: "Sorry, I couldn't find the definition for that word.", ephemeral: true });
    }
}
