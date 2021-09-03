module.exports = {
	name: 'serverinfo',
	description: 'provides info about current server.',
	execute(client, message, args, Discord) {
		message.channel.send(`Server Name: **${message.guild.name}**\nTotal members: **${message.guild.memberCount}**`)
	},
};