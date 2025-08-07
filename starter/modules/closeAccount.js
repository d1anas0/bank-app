import { currentAccount } from '../script.js';
import {
  inputCloseUsername,
  inputClosePin,
  btnClose,
} from '../utils/elements.js';
import { accounts } from '../utils/data.js';

export const closeAccount = () => {
  btnClose.addEventListener('click', e => {
    e.preventDefault();

    // match account username to inputCloseUsername
    const matchUser = accounts.find(
      account => account.username === inputCloseUsername.value
    );

    // confirm PIN is correct
    const getInputPin = Number(inputClosePin.value);
    const matchPIN = accounts.find(account => account.pin === getInputPin);

    deleteAccount(matchUser, matchPIN);
  });
};

// if username AND pin matches
const deleteAccount = (matchUser, matchPIN) => {
  let accountToDelete;
  matchUser === matchPIN
    ? (accountToDelete = matchUser)
    : alert('No such user');

  if (accountToDelete) {
    console.log('confirmed correct user');

    // remove matched account from accounts array
    const remainingAccounts = accounts.filter(
      account => account !== accountToDelete
    );
    console.log('remainingAccounts', remainingAccounts);

    inputCloseUsername.value = '';
    inputClosePin.value = '';

    return remainingAccounts;
  } else {
    return alert('oops');
  }
};
