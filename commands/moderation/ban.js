module.exports = {
	name: 'ban',
	description: 'Will ban an user from the server.',
	execute(client, message, args, Discord) {
		const member = message.mentions.users.first();
        if(member){
            const memberTarget = message.guild.members.cache.get(member.id)
            memberTarget.ban();

            const embed = new Discord.MessageEmbed()
            .setColor('#3900bd')
            .setTitle('User Successfully Banned')
            .addFields(
                {name: 'User Banned:', value: `${member}`}
            )
            .setFooter('Powered By Blur')
            .setThumbnail(member.displayAvatarURL())

            message.channel.send(embed);
        }else{
            const embed = new Discord.MessageEmbed()
            .setColor('#D00505')
            .setTitle('Failed to Ban User')
            .addFields(
                {name: 'Uh Oh!', value: 'There must have been an error with banning this user.'}
            )
            .setFooter('Powered By Blur')
            .setThumbnail('https://i.imgur.com/0kGUvfg.png')

            message.channel.send(embed);
        }
	},
};