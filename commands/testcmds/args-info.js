module.exports = {
	name: 'args-info',
	description: 'returns an argument for testing',
	execute(client, message, args, Discord) {
		if (!args.length) {
            return message.channel.send(`You didn't provide any arguments, ${message.author}!`);
        }
        else if (args[0] === 'foo') {
            return message.channel.send('bar');
        }
    
        message.channel.send(`Arguments: ${args}/nArguments length: ${args.length}`);
	},
};