module.exports = {
	name: 'purge',
	description: 'Deletes Multiple messsages.',
	execute(client, message, args, Discord) {
		const addnumber = new Discord.MessageEmbed()
		.setColor('#D00505')
		.setTitle('Error!')
		.addFields(
			{name: 'Missing Value', value: 'Please add the number of messages you want to Delete'}
			)
		.setFooter('Powered By Blur', 'https://i.imgur.com/0kGUvfg.png')

		if(!args[0]) return message.channel.send(addnumber);
		message.channel.bulkDelete(args[0])
		.catch ((error) =>{
			message.channel.send('Unable to mass delete messages past 14 days old!');
			throw error;
		})
	},
};