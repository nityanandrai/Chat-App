var socket = io();

socket.on('connect', function () {
  console.log('Connected to server');
});

socket.on('disconnect', function () {
  console.log('Disconnected from the server');
});

socket.on('newMessage', function (message) {
  console.log('New message arrived ', message);

  var li = jQuery('<li></li>');
  li.text(message.from+': '+message.text);
  jQuery('#messages').append(li);
});

// socket.emit('createMessage', {
//   from: 'Jeny',
//   text: 'Jeny funked you'
// }, function(data) {
//   console.log('Got it Jeny ', data);
// });

jQuery('#message-form').on('submit', function (e) {
  e.preventDefault();

  socket.emit('createMessage', {
    from: 'User',
    text: jQuery('[name=message]').val()
  }, function() {

  });
});
