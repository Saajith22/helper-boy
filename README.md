# Helper-boy
Helper-boy is an advanced package, that makes discord.js functions, methods, and stuff easier to use!

It's a must use package for discord.js users!!

CODE EXAMPLES =>

## Embed

```js
const Discord = require('discord.js');
const client = new Discord.Client();
const { helper } = require('helper-boy');
client.on('message', async(message) => {
    const e = helper.embed('Title', 'Description', 'BLUE');
    if(message.content === '!test') {
       message.channel.send(e);
    }
})
```

## Mongo
```js
const Discord = require('discord.js');
const client = new Discord.Client();
const { helper } = require('helper-boy');

helper.Mongodb('mongodb-uri');
```

###### Github => https://github.com/Saajith22/helper-boy/tree/main