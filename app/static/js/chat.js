// chat.js
// =========
// This file will handle all the chat functionality
// including sending and receiving messages
// and showing the messages in the chat window
// =========
$(document).ready(function() {
    // Connect to the socket
    var socket = io.connect('http://' + document.domain + ':' + location.port + '/chat');
    // Get the username
    var username = $('#get-username').text();
    // Get the room
    var room = $('#get-room').text();
    // Get the user's color
    var userColor = $('#get-color').text();
    // Get the user's avatar
    var userAvatar = $('#get-avatar).text();


    // When the user joins the room
    socket.on('connect', function() {
        socket.emit('joined', {
            room: room,
            username: username,
            color: userColor,
            avatar: userAvatar
        });
    });

    // When the server sends a message
    socket.on('message', function(data) {
        // Display the message
        $('#messages').append('<div class="message"><span class="user" style="color:' + data.color + '">' + data.username + '</span>: ' + data.message + '</div>');
    });

    // When the user leaves the room
    socket.on('left', function(data) {
        // Display the message
        $('#messages').append('<div class="message"><span class="user" style="color:' + data.color + '">' + data.username + '</span> left the room</div>');
    });

    // When the user changes their username
    socket.on('changed', function(data) {
        // Display the message
        $('#messages').append('<div class="message"><span class="user" style="color:' + data.color + '">' + data.old + '</span> changed their username to <span class="user" style="color:' + data.color + '">' + data.username + '</span></div>');
    });

    // When the user changes their color
    socket.on('color', function(data) {
        // Display the message
        $('#messages').append('<div class="message"><span class="user" style="color:' + data.color + '">' + data.username + '</span> changed their color to ' + data.newColor + '</div>');
    });

    // When the user changes their avatar
    socket.on('avatar', function(data) {
        // Display the message
        $('#messages').append('<div class="message"><span class="user" style="color:' + data.color + '">' + data.username + '</span> changed their avatar</div>');
    });

    // When the user sends a message
    $('#send').click(function() {
        // Get the message
        var message = $('#message').val();
        // Send the message
        socket.emit('message', {
            room: room,
            username: username,
            color: userColor,
            avatar: userAvatar,
            message: message
        });
        // Clear the message input
        $('#message').val('');
    });

    