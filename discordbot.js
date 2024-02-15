const { Client, GatewayIntentBits, SlashCommandBuilder } = require('discord.js');

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages
    ]
});

client.once('ready', () => {
    console.log('Bot is ready!');
    client.guilds.cache.forEach(guild => {
        guild.commands.set([]);
    });
    client.application.commands.create({
        name: 'hallo',
        description: 'Sagt Hallo!'
    });
});

client.on('interactionCreate', async interaction => {
    if (!interaction.isCommand()) return;

    const { commandName, options } = interaction;

    if (commandName === 'hallo') {
        await interaction.reply('Hallo!');
    }
});


const TOKEN = 'MTIwNzY3NjM1ODMxMDc1NjQwMg.Gt0b5z.E4K_im14oXHkLe-6WgXp4X8IZGNLYwJA3P_w70'

client.login(TOKEN)