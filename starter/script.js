'use strict';

// BANKIST APP

import accounts from './data.js';
import updateUI from './updateUI.js';
import { displayMovements } from './transactionsList.js';
import {
  btnLogin,
  inputLoginPin,
  inputLoginUsername,
  labelWelcome,
  containerApp,
} from './elements.js';
import transferFunds from './transferFunds.js';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

// const currencies = new Map([
//   ['USD', 'United States dollar'],
//   ['EUR', 'Euro'],
//   ['GBP', 'Pound sterling'],
// ]);

export let currentAccount;
transferFunds();

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

  updateUI(currentAccount);
  console.log('currentAccount', currentAccount);
});

// NEXT: build 'Close Account' feature (ie. remove account from the accounts array)
