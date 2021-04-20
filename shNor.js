const { ShardingManager } = require('discord.js');

const bumbe = new ShardingManager('./index.js', { //main dosyanızı yazın!
	totalShards: 2, //Auto yazılabilir veya farklı bir sayı yazabilirsiniz.
    token: "ODAwMzA2ODIxMzYxMTcyNDkx.YAQNzw.oeQ6WfJWAHxlFnTX4rJG5AgFg2c" //Tokeninizi giriniz
});
bumbe.spawn();

bumbe.on('shardCreate', shard => {
    console.log(`${shard.id} İDli shard başlatıldı!`);
});

//Discord.js v12 İçindir. 