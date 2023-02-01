const { Client, GatewayIntentBits} = require('discord.js')
require('dotenv/config')

const client = new Client ({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent,
    ]
})

client.on('ready', () => {
    console.log('The Bot is Online')
})

client.on('messageCreate', messsage => {
    if (messsage.content === 'Hello') {
        messsage.reply('halo juga semoga harimu menyenangkan :)')
    }
})

client.on('messageCreate', messsage => {
    if (messsage.content === 'untuk apa kamu aktif bot?') {
        messsage.reply('Untuk Memenuhi Tugas Akhir Kecerdasan Buatan')
    }
})

client.on('messageCreate', messsage => {
    if (messsage.content === 'siapa yang membuat mu bot?') {
        messsage.reply('Yang Menciptakan saya adalah Tegar Syah Pahlevi')
    }
})

client.on('messageCreate', messsage => {
    if (messsage.content === 'apa yang bisa kamu lakukan bot?') {
        messsage.reply('Menjawab pertanyaan sesuai yang diprogram oleh Tegar Syah Pahlevi')
    }
})

client.on('messageCreate', messsage => {
    if (messsage.content === 'apa kata kata yang ingin disampaikan kepada pembuatnya bot?') {
        messsage.reply('saya berterimakasih kepada pembuat Tegar Syah Pahlevi dan juga pemberi tugas Pak Dr. Abdusy Syarif, ST., MT. . karena mereka saya bisa hadir disini. Sekali lagi Terimakasih')
    }
})


client.login(process.env.TOKEN)