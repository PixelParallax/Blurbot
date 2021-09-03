module.exports = {
    name: 'kick',
    description: "This command kicks a member!",
    execute(client, message, args, Discord){
        const target = message.mentions.users.first();
        if(target){
            const memberTarget = message.guild.members.cache.get(target.id);
            memberTarget.kick();

            const embed = new Discord.MessageEmbed()
            .setColor('#3900bd')
            .setTitle('User Successfully Kicked')
            .addFields(
                {name: 'User Kicked:', value: `${target}`}
            )
            .setFooter('Powered By Blur')
            .setThumbnail(member.displayAvatarURL())

            message.channel.send(embed);
        }else{
            const embed = new Discord.MessageEmbed()
            .setColor('#D00505')
            .setTitle('Failed to Kick this User')
            .addFields(
                {name: 'Uh Oh!', value: 'There must have been an error with kicking this user.'}
            )
            .setFooter('Powered By Blur')
            .setThumbnail('https://i.imgur.com/0kGUvfg.png')

            message.channel.send(embed);
        }
    }
}