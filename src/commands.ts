import { REST, Routes } from 'discord.js';
require('dotenv').config();

const token = process.env.TOKEN;
const clientId = process.env.CLIENT_ID;
const guildId = process.env.GUILD_ID;

const commands = [];

const commandFiles = ['server.js', 'user.js', 'define.js', 'synonym.js', 'antonym.js'];
for (const file of commandFiles) {
    const command = require(`./commands/${file}`);
    commands.push(command.data.toJSON());
}

const rest = new REST().setToken(token);
(async () => {
    try {
        console.log('Started refreshing application (/) commands.');

        await rest.put(
            //Routes.applicationCommands(clientId),
            Routes.applicationGuildCommands(clientId, guildId),
            { body: commands },
        );

        console.log('Successfully reloaded application (/) commands.');
        console.log('\nAvailable commands:', commands.map(cmd => cmd.name));
    } catch (error) {
        console.error(error);
    }
})();
