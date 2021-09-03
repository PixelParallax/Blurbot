module.exports = {
	name: 'ping',
	description: 'Ping!',
	execute(client, message, args, Discord) {
		message.channel.send('Pong.');
	},
};