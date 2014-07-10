var prompt = require('sync-prompt').prompt;
var chalk = require('chalk');

var balance = 1000, deposits = [], withdrawl = []
var option =  prompt('What would you like to Deposite (D), or Withdrawl (W) or (q)uit? ');
while( option != 'q' ) {
  var amount = prompt('Amount: ');
  amount = parseFloat(amount);

  if(option === 'D'){
    deposits.push(amount);
  }else{
    withdrawl.push(amount);
  }


option = prompt(' What would you like to Deposite (D), or Withdrawl (W) or (q)uit? ');
}

var deps = 0, withs = 0;




