# Helper-boy

Helper-boy is an advanced package, that makes discord.js functions, methods, and stuff easier to use!

It's a must use package for discord.js users!!

CODE EXAMPLES =>

## Embed

```js
const { Client } = require("discord.js");
const { embed } = require("helper-boy");

const client = new Client();

client.on("message", async (message) => {
  const e = embed("Title", "Description", "BLUE");
  if (message.content === "!test") {
    message.channel.send(e);
  }
});
```

## Mongo

```js
const { Client } = require("discord.js");
const { Mongodb } = require("helper-boy");

const client = new Client();

Mongodb("mongodb-uri");
```
