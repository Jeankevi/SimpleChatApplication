/*
 * Group Name: Kevin Hoang and Holly Rulye.
 * Project Name: Langugage Term Project.
 * Title: Node.js
 * Course: CSCE 343 - Programing Language Concept.
 * Source: http://socket.io/get-started/chat/
 * Program discreption: This is create the chat message backward and forward between multiple person.
*/

var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

io.emit('some event', { for: 'everyone' });

io.on('connection', function(socket){
  socket.broadcast.emit('hi');
	
  console.log('a user connected');
  socket.on('disconnect', function(){
	  console.log('user disconnected');
  });
  socket.on('chat message', function(msg){
	io.emit('chat message',msg);  
    console.log('message: ' + msg);
  });
  
});

http.listen(3000, function(){
  console.log('listening on *:3000');
});
