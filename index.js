const WebSocket = require('ws');
const http = require('http');

// Create HTTP server
const server = http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('WebSocket server running\n');
});

// Create WebSocket server on top of HTTP server
const wss = new WebSocket.Server({ server });

wss.on('connection', (ws) => {
  console.log('New WebSocket connection established.');

  // When a message is received from ESP8266
  ws.on('message', (message) => {
    console.log('Received:', message);
  });

  // Send a message to ESP8266
  ws.send('Hello from WebSocket server!');
});

// Start the server on port 8080
server.listen(8080, () => {
  console.log('Server running on wss://internetwithanalytics.in:8080');
});
