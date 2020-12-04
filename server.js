const Discord = require('discord.js');
const bot = new Discord.Client();

const config = require("./config.json");

bot.once('ready', () => {
    bot.user.setActivity(`Custom Status Here`, { type: "WATCHING"})
    console.log('Online');    
});

bot.on('message', async (message) => {
    let prefix = config.prefix
    const [cmd, ...args] = message.content.split(/\s/)
    if (cmd === prefix + 'command1') {
  message.channel.send('Response to command 1');
} 
  if(message.content.startsWith(prefix + 'command2')){
    const embed1 = new Discord.MessageEmbed()
    .setTitle('Title 1')
    .setDescription('Description 1')
    .addField('Field 1', 'Field 1 Description')
    .setFooter('Footer 1')
    .setColor('Any color you want')
    
    await message.channel.send(embed1); //The embed1 or whatever variable you put in const embed1 must go in the (embed1) spot.
  }
}
)

bot.login(config.token);
