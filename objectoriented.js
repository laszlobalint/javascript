var userOne = {
  email: 'firstuser@email.com',
  name: 'Thomas',
  login() {
    console.log(this.email, ' has been signed in!');
  },
  logout() {
    console.log(this.email, ' has logged out!');
  }
};

userOne.name = 'Zephyr';
console.log(userOne['name']);

class User {
  constructor(name, email) {
    this.name = name;
    this.email = email;
  }
  login() {
    console.log(this.email, ' was logged in!');
  }
  logout() {
    console.log(this.email, ' was logged out!');
  }
}

var userTwo = new User('Henrik', 'hoopy@gmail.com');
userTwo.login();
userTwo.logout();
