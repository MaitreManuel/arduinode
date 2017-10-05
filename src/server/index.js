const io = require('socket.io')(3567);
const SerialPort = require('serialport');
const Readline = SerialPort.parsers.Readline;
const port = new SerialPort('/dev/ttyACM0', { baudRate: 9600 });
const parser = new Readline();

port.on('open', () => {
    console.log("C'est l'heure de manger!!!");
    setTimeout(() => {
        port.write('1');
    }, 2000);
});

port.pipe(parser);
parser.on('data', data => {
    console.log(data);
    io.emit('toto', data);
});
