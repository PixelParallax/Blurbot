const { Guild, Message, Channel } = require("discord.js");

module.exports = {
	name: 'guildid',
	description: 'returns an the current servers guildid',
	execute(client, message, args, Discord) {
        message.channel.send(`The Current Servers id is: ${message.guild.id}`);
	},
};