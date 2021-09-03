module.exports = (client) => {
    const channelId = "879110069025898516";
    const rulesChannel = "863972761659768832";
    client.on("guildMemberAdd", (member) => {
      console.log(member);

      const embed = new Discord.MessageEmbed()
            .setColor('#3900bd')
            .setTitle('Welcome <@S{member.id}> to Flux')
            .setDescription('Please visit #rules and #server-selector')
            .setFooter('Powered By Blur', 'https://i.imgur.com/0kGUvfg.png')
            .setThumbnail('https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/joypixels/291/waving-hand_1f44b.png')

    const channel = member.guild.channels.cache.get(channelId);
    channel.send(embed);
    });
};