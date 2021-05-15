const { connect } = require('mongoose');
const { MessageEmbed } = require('discord.js');

/**
 * Creates a basic embed with a title, description and color.
 * @param {string} title 
 * @param {string} description 
 * @param {string} color 
 * @returns {MessageEmbed} Embed
 * @example const embed = embed("Some Title", "Some Description", "#00DCFF");
 */
async function embed(title, description, color) {
    const e = new MessageEmbed()
        .setTitle(title)
        .setDescription(description)
        .setColor(color)

    return e
}


/**
 * Connects to MongoDB
 * @param {string} uri 
 * @param {{
 * modify: boolean
 * }} options
 * @example Mongodb("MONGO_URI", { modify: true });
 */
async function Mongodb(uri, options) {
    if (typeof uri !== 'string')
        return console.log('Invalid MongoDB uri provided! (Not a String) -- [Helper Boy]');

    if (options && options.modify === true) {
        console.log('success')
        connect(uri, {
            useFindAndModify: false,
            useNewUrlParser: true,
            useUnifiedTopology: true
        }).catch(e => console.error(`An error Occured [ Helper Boy ] -  ${e}`));
    } else {
        connect(uri, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        }).catch(e => console.error(`An error Occured [ Helper Boy ] -  ${e}`));
    }
}


module.exports = {
    embed,
    Mongodb
};