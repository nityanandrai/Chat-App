const expect = require('expect');

const {Users} = require('./users.js');

describe('Users', () => {

  var users;

  beforeEach(() => {
    users = new Users();
    users.users = [{
      id: '1',
      name: 'anta',
      room: 'Node'
    }, {
      id: '2',
      name: 'bnta',
      room: 'React'
    }, {
      id: '3',
      name: 'cnta',
      room: 'Node'
    }]
  });

  it('Should add new user', () => {
    var users = new Users();
    var user = {
      id: '121',
      name: 'Nitya',
      room: 'Tati'
    };
    var resUser = users.addUser(user.id, user.name, user.room);
    expect(users.users).toEqual([user]);
  });

  it('Should remove a user', () => {
    var userId = '1';
    var user = users.removeUser(userId);

    expect(user.id).toBe(userId);
    expect(users.users.length).toBe(2);
  });

  it('Should not remove a user', () => {
    var userId = '4';
    var user = users.removeUser(userId);

    expect(user).toBeUndefined();
    expect(users.users.length).toBe(3);
  });

  it('Should find a user', () => {
    var userId = '2';
    var user = users.getUser(userId);
    expect(user.id).toBe(userId);
  });

  it('Should not find a user', () => {
    var userId = '4';
    var user = users.getUser(userId);
    expect(user).toBeUndefined();
  });

  it('Should return users in room Node', () => {
    var userList = users.getUserList('Node');
    expect(userList).toEqual(['anta', 'cnta']);
  });

  it('Should return users in room React', () => {
    var userList = users.getUserList('React');
    expect(userList).toEqual(['bnta']);
  });
});
