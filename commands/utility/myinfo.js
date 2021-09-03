module.exports = {
	name: 'myinfo',
	description: 'Gives some info about your discord profile.',
	execute(client, message, args, Discord) {
		message.channel.send(`Your username: **${message.author.username}**\nYour ID: **${message.author.id}**`);
	},
};