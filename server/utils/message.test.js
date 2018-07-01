// Test for message.js
// Checking the message genarated is valid

var expect = require('expect');

var {generateMessage} = require('./message.js');

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
