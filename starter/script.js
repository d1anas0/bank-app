'use strict';

// BANKIST APP

import accounts from './data.js';
import {
  calculateDisplayBalance,
  calcDisplaySummaries,
} from './calculations.js';
import { displayMovements } from './transactionsList.js';

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

const createUsernames = accounts => {
  // usernames = initials only, in lower case
  accounts.forEach(account => {
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

// UPDATE UI
const updateUI = () => {
  calculateDisplayBalance(currentAccount);
  calcDisplaySummaries(currentAccount);
  displayMovements(currentAccount.movements);
};

// TRANSFER AMOUNTS

btnTransfer.addEventListener('click', e => {
  e.preventDefault();

  let currentAccountTransactions = currentAccount.movements;
  let receiverAccountTransactions = recipient.movements;
  const transferAmount = Number(inputTransferAmount.value);

  const recipient = accounts.find(
    account => inputTransferTo.value === account.username
  );

  const senderBalance = currentAccount.balance;

  const meetsTransferCriteria =
    senderBalance >= transferAmount && // sender must have enough money in the account
    transferAmount > 0 && // must be transferring 1 or more dollars
    !!recipient && // recipient account must exist
    recipient.username !== currentAccount.username; // must not be transferring to themselves

  if (meetsTransferCriteria) {
    currentAccountTransactions.push(-transferAmount);
    console.log('transactions - sender', currentAccountTransactions);
    receiverAccountTransactions.push(transferAmount);
    console.log('transactions - receiver', receiverAccountTransactions);

    updateUI();
  }
  {
    console.log('Please check your inputs and try again');
  }

  inputTransferTo.value = '';
  inputTransferAmount.value = '';
});

// NEXT: build 'Close Account' feature (ie. remove account from the accounts array)
