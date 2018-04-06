const readlineSync = require('readline-sync');
const clear = require('console-clear');
var fs = require('fs');
var loop = true;

function atm () {
  let account = fs.readFileSync('atm_balance.txt').toString();
  let accountInt = parseInt(account);
  loop = true;
  while (loop === true) {
    let input = ['Withdraw cash', 'Deposit cash', 'Rob the ATM', 'Cancel the transaction'];
    let index = readlineSync.keyInSelect(input, 'What kind of transaction do you want to do?');
    switch (index) {
      case 0:
        let withdraw = readlineSync.question('How much cash do you need?');
        let withdrawInt = parseInt(withdraw);
        while (withdrawInt > account) {
          console.log('No sufficient funds!');
          withdraw = readlineSync.question('Please, ask for another amount!');
          withdrawInt = parseInt(withdraw);
        }
        accountInt = accountInt - withdrawInt;
        fs.writeFile('atm_balance.txt', accountInt, function (err) {
          if (err) {
            return console.log(err);
          }
        });
        console.log('Your new balance: ' + accountInt + ' $');
        break;
      case 1:
        let deposit = readlineSync.question('How much cash do you want to deposit?');
        let depositInt = parseInt(deposit);
        accountInt = accountInt + depositInt;
        fs.writeFile('atm_balance.txt', accountInt, function (err) {
          if (err) {
            return console.log(err);
          }
        });
        console.log('Your new balance: ' + accountInt + ' $');
        break;
      case 2:
        if (readlineSync.keyInYN('Are you sure you want to do this?')) {
          accountInt = 0;
          fs.writeFile('atm_balance.txt', accountInt, function (err) {
            if (err) {
              return console.log(err);
            }
          });
          console.log('You have robbed this ATM! Bastard! New balance of the ATM: ' + accountInt + ' $');
        }
        break;
      case 3:
        console.log('Your balance: ' + accountInt + ' $');
        console.log('Good bye! Do not forget to take your card.');
        loop = false;
        break;
      default:
        console.log('Your balance: ' + accountInt + ' $');
        loop = false;
        break;
    }
  }
}

clear();
console.log('Welcome our dear customer to the Flow Academy ATM.');
let account = fs.readFileSync('atm_balance.txt').toString();
let accountInt = parseInt(account);
console.log(' Your current balance: ' + accountInt + ' $');
atm();
