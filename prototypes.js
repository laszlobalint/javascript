function User (name, email) {
  this.name = name;
  this.email = email;
  this.online = false;
  this.login = function () {
    console.log(this.email, ' has logged in!');
  };
}

User.prototype.login = function () {
  this.online = true;
  console.log(this.email, ' has logged in!');
};

User.prototype.logout = function () {
  this.online = false;
  console.log(this.email, ' has logged out!');
};

function Admin (...args) {
  User.apply(this, args);
  this.role = 'Super administrator';
}

Admin.prototype = Object.create(User.prototype);

Admin.prototype.deleteUser = function (u) {
  users = users.filter(user => {
    return user.email !== u.email;
  });
};

let userOne = new User('Roberto', 'roby@vipmail.com');
let userTwo = new User('Caroline', 'carla@gmail.com');
let admin = new Admin('Captain', 'tillvictory@goahed.com');

let users = [userOne, userTwo, admin];

console.log(userOne);
userTwo.login();
userTwo.logout();

let nums = [3, 5, 1, 2, 4];
nums.sort();

console.log(admin);
admin.deleteUser(users[0]);
