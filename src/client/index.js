import io from 'socket.io-client';

import './style.css';

const socket = io('http://localhost:3567');
socket.on('toto', data => {
    document.body.style.background = 'hsl('+ data +', 50%, 50%)';
    console.log(data);
});
