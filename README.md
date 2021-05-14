# Helper-boy
Helper-boy is an advanced package, that makes discord.js functions, methods, and stuff easier to use!

It's a must use package for discord.js users!!

CODE EXAMPLES =>

## /* Embed */

```js
const Discord = require('discord.js');
const client = new Discord.Client();
const { embed  } = require('helper-boy');
client.on('message', async(message) => {
    const e = embed('Title', 'Description', 'BLUE');
    if(message.content === '!test') {
       message.channel.send(e);
    }
})
```

## /* Mongo */
```js
const Discord = require('discord.js');
const client = new Discord.Client();
const { Mongo } = require('helper-boy');

Mongo('mongodb-uri');
```