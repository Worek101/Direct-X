const Discord = require("discord.js");
const prettyMilliseconds = require('pretty-ms');

const prefix = "."

let client = new Discord.Client();

client.on("ready", async() => {
    console.log(`Direct X - Hello World!`);

    client.user.setActivity("Direct X - Hello World!", {
        type: "PLAYING"
    });
});
  
client.on("guildDelete", guild => {
    console.log(`Zostałem usunięty z serwera: ${guild.name} [ID: ${guild.id}]`);
});

client.on("message", async message => {
    if (message.author.bot) return;
    if (message.content.indexOf(prefix) !== 0) return;
        var args = message.content.slice(prefix.length).trim().split(/ +/g);
        var command = args.shift().toLowerCase()

    if (command == "uptime") {
        let uptime = new Discord.MessageEmbed()
            .setColor(`#111133`)
            .setTitle('Techniczna strona mocy!')
            .setDescription(`Witaj ${message.author} <:3_:841724689999069234>, doskonale wiem o Twoich spiskach! Pewnie przyszedłeś dowiedzieć się co nie co o czarnej stronie naszego bota...\n\n**<:directx:841724696272961597> Direct X**\n\n**Uptime:** \`${prettyMilliseconds(client.uptime)}\`\n**Prefix:** \`.\`\n**Edytor:** <:VSC:841724689160470548>\n**Język:** <:javascript:841724690237751328>`)
            .setFooter(`Komendę wywołał: ${message.author.tag}`)
        message.channel.send(uptime)
    }
    
});

client.login('ODQxNzIwNzYxNDAzMTc5MDkx.YJq3iw.1e-3ZCSkafn1BlHRpC0sKkOerus');