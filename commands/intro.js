const Discord = require('discord.js');

module.exports = {
	name: 'intro',
	description: 'Link to basic intro to pokedraft',
	execute(message, args) {
		const msg = new Discord.RichEmbed()
			.setColor('#0099ff')
			.setAuthor('Piplup', 'https://vignette.wikia.nocookie.net/pkmnshuffle/images/1/11/Piplup.png')
			.addField('Pip pip!', 'If you\'re having trouble explaining Pokédraft to someone, just give them this link: [http://pokedraft.dk/docs/intro-til-pokedraft.pdf](http://pokedraft.dk/docs/intro-til-pokedraft.pdf)!');
		message.channel.send(msg);
	},
};