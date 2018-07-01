// Test for message.js
// Checking the message genarated is valid

var expect = require('expect');

var {generateMessage} = require('./message.js');
var {generateLocationMessage} = require('./message.js');

describe('Genarate Messasge', () => {
  it('Should generate correct user message', () => {

    var from = 'James Bond';
    var text = 'The name is Bond, James Bond';
    var message = generateMessage(from, text);

    expect(message.from).toBe(from);
    expect(message.text).toBe(text);
    expect(typeof message.createdAt).toBe('number');

  });
});

describe('Generate Location Message', () => {
  it('Should generate correct geo location coords', () => {
    var from = 'James Bond';
    var latitude = 1;
    var longitude = 1;

    var locationMessage = generateLocationMessage(from, latitude, longitude);

    expect(locationMessage.from).toBe(from);
    expect(locationMessage.url).toBe('https://www.google.com/maps?q'+latitude+','+longitude);
    expect(typeof locationMessage.createdAt).toBe('number');

  });
});
