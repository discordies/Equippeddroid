const Discord = module.require("discord.js");
const randomnum = require("unique-random");
const rand = randomnum(1, 6);
module.exports.run = async (bot, message, args) => {
    
   message.channel.send("Rolling the dice...");

   Discord().TextChannel.fetchMessage(message.id)
    .then(message => message.edit(`:dice: The dice rolled ${rand}`));
  
}

module.exports.help = {
    name: "dice"
}