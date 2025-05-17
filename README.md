# Dictionary Bot

A Discord bot that provides dictionary definitions directly in your server, powered by [DictionaryAPI.dev](https://dictionaryapi.dev/).

## Features

- Look up word definitions from Discord
- Get phonetics, meanings, examples, and more
- Simple and intuitive commands
- Built with TypeScript for reliability

## Installation

1. Clone this repository
```bash
git clone https://github.com/1neskk/dictionary-bot.git
cd dictionary-bot
```

2. Install dependencies
```bash
npm install
```

3. Create a `.env` file with your Discord bot token and application ID
```
TOKEN=your_token_here
CLIENT_ID=your_client_id_here
```

4. Build the project
```bash
npm run build
```

5. Start the bot
```bash
npm start
```

## Usage

Once the bot is running and invited to your server, you can use the following commands:

```
/define <word> - Look up the definition of a word
/synonym <word> - Get synonyms for a word
/antonym <word> - Get antonyms for a word
```

## Technologies

- TypeScript
- Discord.js
- [DictionaryAPI.dev](https://dictionaryapi.dev/) for word definitions

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the Apache License 2.0 - see the LICENSE file for details.