const { MessageEmbed } = require('discord.js');
const { connect } = require('mongoose');

async function embed(title, description, color) {
    const e = new MessageEmbed()
        .setTitle(title)
        .setDescription(description)
        .setColor(color)

    return e
}


// Mongodb
async function Mongodb(uri, {
    modify
}) {
    if (typeof uri !== 'string') return console.log('Invalid MongoDB uri provided! (Not a String) -- [Helper Boy]')

    if (modify === true) {
        connect(uri, {
            useFindAndModify: false,
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
    } else {
        connect(uri, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
    }
}

module.exports = {
    embed,
    Mongodb
}
