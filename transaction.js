var fraudsters = ['4244-4444-4444-4444', '4444-4444-4444-4444', '4444-4444-5555-4444'];

function payment (cardNumber, cvv, name, amount) {
  var transaction = {
    cardNumber: cardNumber,
    cvv: cvv,
    name: name,
    amount: amount,

    validation: function () {
      if (this.cardNumber == '' || this.name == '') {
        return false;
      }

      return true;
    },

    fraudDetection: function () {
      for (i = 0; i < fraudsters.length; i++) {
        if (fraudsters[i] == this.cardNumber) {
          return false;
        }
      }

      return !fraudsters.includes(this.cardNumber);
    },

    pay: function () {
      console.log('Card number: ' + this.cardNumber);
      console.log('CVV: ' + this.cvv);
      console.log('Name: ' + this.name);
      console.log('Amount: ' + this.amount);
      console.log('Payment success!');
    }
  };

  if (!transaction.validation()) {
    return 'Rejected';
  }
  if (!transaction.fraudDetection()) {
    return 'Rejected';
  }

  transaction.pay();
  return 'Done';
}

console.log(payment('4644-4444-4444-4444', 344, 'Toth Bela', 1000));
