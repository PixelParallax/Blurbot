module.exports = {
	name: 'beep',
	description: 'beepy!',
	execute(client, message, args, Discord) {
		message.channel.send('Boop!');
	},
};