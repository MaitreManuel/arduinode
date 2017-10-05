import io from 'socket.io-client';

import './style.css';

const socket = io('http://192.168.1.195:3567');

socket.on('connect', () => {
    socket.emit('echo');
});
socket.on('toto', data => {
    document.body.style.background = 'hsl('+ data +', 50%, 50%)';
    document.querySelector('#compteur').innerText = data;
});
