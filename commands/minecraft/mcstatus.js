const util = require('minecraft-server-util');

module.exports = {
	name: 'mcstatus',
	description: 'Gives the status of a minecraft server',
	execute(client, message, args, Discord) {
		if(!args[0]) return message.channel.send('Please enter an IP');
        if(!args[1]) return message.channel.send('Please add a port')

        util.status(args[0], {port: parseInt(args[1])}).then((response) =>{
            const embed = new Discord.MessageEmbed()
            .setColor('#3900bd')
            .setTitle('Minecraft Server Status')
            .addFields(
                {name: 'Server IP', value: response.host},
                {name: 'Online Players', value: response.onlinePlayers},
                {name: 'Max Players', value: response.maxPlayers},
                {name: 'Version', value: response.version}
            )
            .setFooter('Powered By Blur', 'https://i.imgur.com/0kGUvfg.png')
            .setThumbnail('https://i.imgur.com/8ITBNqU.png')

            message.channel.send(embed);
        })
        .catch ((error) =>{
            message.channel.send('There was an error finding this server');
            throw error;
        })
	},
};