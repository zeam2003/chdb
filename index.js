const express = require ("express");
const bodyParser = require("body-parser");
const {Server: HttpServer} = require('http');
const {Server: SocketServer} = require ('socket.io');   

const app = express();
const httpServer = new HttpServer(app);
const io = new SocketServer(httpServer);


app.use(express.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use(express.static(__dirname + '/public'));

httpServer.listen(8080, () => console.log('Servidor Activo'));
