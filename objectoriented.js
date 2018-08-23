var userOne = {
  email: 'firstuser@email.com',
  name: 'Thomas',
  score: 0,
  login () {
    console.log(this.email, ' has been signed in!');
    return this;
  },
  logout () {
    console.log(this.email, ' has logged out!');
    return this;
  },
  updateScore () {
    this.score++;
    console.log(this.email, ' score is now ', this.score);
    return this;
  }
};

userOne.name = 'Zephyr';
console.log(userOne['name']);

class User {
  constructor (name, email) {
    this.name = name;
    this.email = email;
    this.score = 0;
  }
  login () {
    console.log(this.email, ' was logged in!');
    return this;
  }
  logout () {
    console.log(this.email, ' was logged out!');
    return this;
  }
  updateScore () {
    this.score++;
    console.log(this.email, ' score is now ', this.score);
    return this;
  }
}

class Admin extends User {
  deleteUser (user) {
    users = users.filter(u => {
      return u.email !== user.email;
    });
  }
}

var userTwo = new User('Henrik', 'hoopy@gmail.com');
var userThree = new User('Hanna', 'group@gmail.com');
var userFour = new User('Francis', 'franky@gmail.com');
var admin = new Admin('Boss', 'vip@vipmail.com');

var users = [userTwo, userThree, userFour, admin];

admin.deleteUser(userTwo);
console.log(users);

userTwo.login();
userTwo.logout();
userTwo.updateScore();

userOne.login().updateScore().updateScore().logout();
