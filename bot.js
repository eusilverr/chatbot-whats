const qrcode = require('qrcode-terminal');
const { Client } = require('whatsapp-web.js');
const client = new Client();

client.on('qr', (qr) => {
    qrcode.generate(qr, { small: true });
});

client.on('ready', () => {
    console.log('Client is ready!');
});




    client.on("message", Message => {
if(message.body.tolocalelowercase() === "oi") {
    client.sendMessage (Message.from, "olá,seja bem vindo!");
    client.sendMessage (Message.from, "o que voce deseja?,digite as opções abaixo");
    client.sendMessage (Message.from, "1.automatizar minha empresa");
    client.sendMessage (Message.from, "2.quero fazer anuncios para minha empresa (trafego pago)");

}
if(message.body.tolocalelowercase() === "1") {
     client.sendMessage (Message.from, "ok,logo entraremos em contato para agendar a reunião");
      client.sendMessage (Message.from, "se for urgente voce pode ligar para esse telefone mesmo!");


}

if(message.body.tolocalelowercase() === "2") {
     client.sendMessage (Message.from, "ok,logo entraremos em contato para agendar a reunião");
      client.sendMessage (Message.from, "se for urgente voce pode ligar para esse telefone mesmo!");


}


    })




        client.initialize();