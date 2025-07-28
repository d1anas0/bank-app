'use strict';

import accounts from './data.js';

// BANKIST APP

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

// const currencies = new Map([
//   ['USD', 'United States dollar'],
//   ['EUR', 'Euro'],
//   ['GBP', 'Pound sterling'],
// ]);

/////////////////////////////////////////////////
// Get Usernames

const createUsernames = account => {
  // usernames = initials only, in lower case
  account.forEach(account => {
    account.username = account.owner
      .toLowerCase()
      .split(' ')
      .map(name => name[0])
      .join('');
    console.log(account.username);
  });
};
createUsernames(accounts);

// LOG IN

let currentAccount;
console.log('currentAccount', currentAccount);
btnLogin.addEventListener('click', e => {
  e.preventDefault();
  currentAccount = accounts.find(
    account => account.username === inputLoginUsername.value
  );

  if (Number(inputLoginPin.value) === currentAccount?.pin) {
    // display UI and message
    containerApp.style.opacity = 1;
    labelWelcome.textContent = `Welcome back, ${
      currentAccount.owner.split(' ')[0]
    }`;
    displayMovements(currentAccount.movements);
  } else {
    containerApp.style.opacity = 0;
  }

  // reset login fields
  inputLoginUsername.value = '';
  inputLoginPin.value = '';
  inputLoginPin.blur();

  updateUI();
});

// Transactions
const displayMovements = transactions => {
  containerMovements.innerHTML = '';
  transactions.forEach((movement, index) => {
    const typeOfMovement = movement < 1 ? 'withdrawal' : 'deposit';
    const renderThis = `<div class="movements__row">
          <div class="movements__type movements__type--${typeOfMovement}">${
      index + 1
    } ${typeOfMovement}</div>
          <div class="movements__value">${movement}€</div>
        </div>`;

    containerMovements.insertAdjacentHTML('afterbegin', renderThis);
  });
};

// Display Balance - my attempt
// let currentAccountBalance;
// const calculateDisplayBalance = accountMovements => {
//   currentAccountBalance = accountMovements.reduce((acc, cur, i, arr) => {
//     return acc + cur;
//   }, 0);

//   console.log('display balance 1', currentAccountBalance);
//   labelBalance.textContent = `${currentAccountBalance} €`;
//   return currentAccountBalance;
// };

// Display Balance - instructor
// >>>>> Your instructor’s implementation is preferable for real-world applications. It keeps state local to the account object, avoids unnecessary globals, and makes your code easier to reason about and maintain. Your intuition is correct—encapsulation helps prevent bugs and makes your code more scalable! <<<<<
const calculateDisplayBalance = account => {
  account.balance = account.movements.reduce(
    (account, movement) => account + movement,
    0
  );
  labelBalance.textContent = `${account.balance} €`;
  console.log('calculated display balance', account.balance);
  return account.balance;
};

// // find MAX transaction
// const findMaxTransaction = accountMovement.reduce(
//   (acc, mov) => (acc > mov ? acc : mov),
//   accountMovement[0]
// );
// console.log('max', findMaxTransaction);

// SUMMARIES

const calcDisplaySummaries = transactions => {
  // Deposit summary - my attempt
  // const totalDeposits = transactions.movements.reduce(
  //   (acc, mov) => (mov > 0 ? (acc += mov) : acc),
  //   0
  // );
  // console.log('totalDeposits', totalDeposits);
  // labelSumIn.textContent = `${totalDeposits}€`;

  // Deposit summary - instructor implementation
  const incomes = transactions.movements
    .filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  console.log('totalDeposits (instructor) - ', incomes);
  labelSumIn.textContent = `${incomes}€`;

  // Withdrawal summary
  const totalWithdrawals = transactions.movements.reduce(
    (acc, mov) => (mov < 0 ? (acc += mov) : acc),
    0
  );
  console.log('totalWithdrawals', totalWithdrawals);
  labelSumOut.textContent = `${Math.abs(totalWithdrawals)}€`;

  // Interest

  const interest = transactions.movements
    .filter(mov => mov > 0)
    .map(deposit => (deposit * transactions.interestRate) / 100)
    .filter((int, i, arr) => {
      return int >= 1;
    })
    .reduce((acc, int) => acc + int, 0);
  console.log('interest', interest);
  labelSumInterest.textContent = `${interest}€`;
};

// UPDATE UI
const updateUI = () => {
  calculateDisplayBalance(currentAccount);
  calcDisplaySummaries(currentAccount);
  displayMovements(currentAccount.movements);
};

// TRANSFER AMOUNTS

btnTransfer.addEventListener('click', e => {
  e.preventDefault();

  const transferAmount = Number(inputTransferAmount.value);
  const recipient = accounts.find(
    account => inputTransferTo.value === account.username
  );
  console.log('recipient', recipient, transferAmount);

  let currentAccountTransactions = currentAccount.movements;
  let receiverAccountTransactions = recipient.movements;

  // // for my implementation of calculateDisplayBalance()
  // const senderBalance = currentAccountBalance;
  // // for instructors implementation of calculateDisplayBalance()
  const senderBalance = currentAccount.balance;

  const meetsTransferCriteria =
    senderBalance >= transferAmount && // sender must have enough money in the account
    transferAmount > 0 && // must be transferring 1 or more dollars
    !!recipient && // recipient account must exist
    recipient.username !== currentAccount.username; // must not be transferring to themselves

  if (meetsTransferCriteria) {
    currentAccountTransactions.push(-transferAmount);
    receiverAccountTransactions.push(transferAmount);
    updateUI();
  }
  {
    console.log('Please check your inputs and try again');
  }

  inputTransferTo.value = '';
  inputTransferAmount.value = '';

  console.log('transactions - sender', currentAccountTransactions);
  console.log('transactions - receiver', receiverAccountTransactions);
});

// NEXT: build 'Close Account' feature (ie. remove account from the accounts array)
