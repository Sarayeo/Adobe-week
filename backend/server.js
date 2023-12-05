const express = require('express');
const http = require('http');
const WebSocket = require('ws');

const port = 8082;
const server = http.createServer(express);
const wss = new WebSocket.Server({ server })

wss.on('connection', function connection(ws) {
  ws.on('message', (data)=> {
    wss.clients.forEach(function each(client) {
        console.log(String(data))
      if (client !== ws && client.readyState === WebSocket.OPEN) {
        client.send(String(data));
      }
    })
  })
})

server.listen(port, function() {
  console.log(`Nous écoutons sur le port ${port}!`)
})



// const express = require('express');
// const http = require('http');
// const WebSocket = require('ws');

// const server = new WebSocket.Server({port:8082});

// server.on("connection", (ws) =>{
//     console.log("nouvelle personne connectée !"
//     );

//     //sending a welcome message to the client
//     ws.send("Hello Sara welcome back");
//     //sending a welcome message to the client
//     ws.on("message", (message) =>{
//         console.log(message);

//         //messsage handle
//         if(message == "hi"){
//             ws.send("hello");
//         }else if(message == 'bye'){
//             ws.send("goodbye");
//         }else{
//             ws.send("what do you want me to say");
//         }   
//     });

// });