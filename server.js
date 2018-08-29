const WebSocket = require('ws');
const wss = new WebSocket.Server({ port: 6000 });

// when a client connects to the server
wss.on('connection', function connection(ws) {
    console.log('A client connected');
    
    // when the server receives a connection
    ws.on('message', function incoming(data) {
        // broadcast the message data
        wss.clients.forEach(function each (client) {
            if (client !== ws && client.readyState === WebSocket.OPEN) {
                client.send(data, function ack(error) {
                    console.error(error);
                });
            }
        });
    });
});
