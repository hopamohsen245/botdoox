const Discord = require('discord.js');
const client = new Discord.Client();
var prefix = "p";

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);  
});

client.on('ready', async() => {
var server = "511851602802507796"; // ايدي السررفر
var channel = "511861450877173760";//ايدي الروم
    setInterval(()=>{
    client.guilds.get(server).channels.get(channel).send('**plexythebest,plexythebest,plexythebest,plexythebest,plexythebest,plexythebest,plexythebest,plexythebest,plexythebest,plexythebest,plexythebest,plexythebest,plexythebest,plexythebest,plexythebest, **')
    },305);
})

client.on('message',function(message) {
let args = message.content.split(" ").slice(1).join(" ");
if(message.content.startsWith(prefix + "say")) {
if(!message.guild.member(message.author).hasPermission("ADMINISTRATOR")) return message.reply("**You Dont Have Any Permations:tools: **");
if(!args) return;
message.channel.send(`${args}`);
    message.delete();
}
});

 
client.login(process.env.BOT_TOKEN);
