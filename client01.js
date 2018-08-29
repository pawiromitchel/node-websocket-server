const WebSocket = require('ws');
const ws = new WebSocket('ws://localhost:6000');

// when the client connects to the server
ws.on('open', function open() {
    console.log('connected');

    // send data to the server
    data = JSON.stringify({ sender: 'client01', data: 'Hi there' });
    ws.send(data);
});

// when the client disconnects from the server
ws.on('close', function close() {
    console.log('disconnected');
});

// handle messages received from the server
ws.on('message', function incoming(data) {
    dataParsed = JSON.parse(data);
    console.log(data);
});