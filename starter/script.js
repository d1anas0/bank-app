'use strict';

// BANKIST APP

import { accounts } from './utils/data.js';
import { updateUI } from './modules/updateUI.js';
import { displayTransactions } from './modules/displayTransactions.js';
import {
  btnLogin,
  inputLoginPin,
  inputLoginUsername,
  labelWelcome,
  containerApp,
} from './utils/elements.js';
import { transferFunds } from './modules/transferFunds.js';
import { createUsernames } from './modules/createUsernames.js';
import { closeAccount } from './modules/closeAccount.js';

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

createUsernames(accounts);
closeAccount();

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
    displayTransactions(currentAccount.movements);
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
// closeAccount();
