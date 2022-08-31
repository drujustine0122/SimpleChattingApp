var server = require("http").createServer(app);
var io = require("socket.io")(server);
users = [];
connections = [];
server.listen(3000);
app.get("/", function (req, res) {
    res.sendFile(__dirname+"/index.html");
} );

io.sockets.on("connection", function (socket) {
    connections.push(socket);
    console.log("Connected: %s socket connected", connections.length);
    socket.on("disconnect", function (data) {
        connections.splice(connections.indexOf(socket), 1);
        console.log("Disconnected : %s socket connected", connections.length);
    });
    socket.on("send message", function (data) {
        
    })
})