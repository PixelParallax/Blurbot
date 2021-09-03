module.exports = {
	name: 'testimage',
	description: 'sends test image.',
	execute(client, message, args, Discord) {
        message.channel.send('Heres the image', {
            files: [
                "./images/commandsbanner.png"
            ]
        }); 
	},
};