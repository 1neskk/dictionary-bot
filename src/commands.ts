import { REST, Routes } from 'discord.js';
require('dotenv').config();
const fs = require('fs');
const path = require('path');

const token = process.env.TOKEN;
const clientId = process.env.CLIENT_ID;
//const guildId = process.env.GUILD_ID;

const commands = [];

const commandsPath = path.join(__dirname, 'commands');
const commandFiles = fs.readdirSync(commandsPath).filter((file: any) => file.endsWith('.js') || file.endsWith('.ts'));
for (const file of commandFiles) {
    const command = require(`./commands/${file}`);
    commands.push(command.data.toJSON());
}

const rest = new REST().setToken(token as string);
(async () => {
    try {
        console.log('Started refreshing application (/) commands.');

        await rest.put(
            Routes.applicationCommands(clientId as string),
            //Routes.applicationGuildCommands(clientId as string, guildId as string),
            { body: commands },
        );

        console.log('Successfully reloaded application (/) commands.');
        console.log('\nAvailable commands:', commands.map(cmd => cmd.name));
    } catch (error) {
        console.error(error);
    }
})();
