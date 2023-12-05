const webSocket = require('ws');
const server = new webSocket.Server({port:8082});

server.on("connection", (ws) =>{
    console.log("nouvelle personne connectée !"
    );

    //sending a welcome message to the client
    ws.send("Hello Sara welcome back");
    //sending a welcome message to the client
    ws.on("message", (message) =>{
        console.log(message);

        //messsage handle
        if(message == "hi"){
            ws.send("hello");
        }else if(message == 'bye'){
            ws.send("goodbye");
        }else{
            ws.send("what do you want me to say");
        }   
    });

});