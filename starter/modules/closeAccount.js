import { currentAccount } from '../script.js';
import {
  inputCloseUsername,
  inputClosePin,
  btnClose,
} from '../utils/elements.js';
import { accounts } from '../utils/data.js';

let accountToDelete;

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

    // if username AND pin matches
    if (matchUser === matchPIN) {
      console.log('confirmed correct user');

      // remove matched account from accounts array
      const remainingAccounts = accounts.filter(
        account => account !== (accountToDelete = matchUser)
      );
      console.log(remainingAccounts);
    } else {
      prompt('oops');
    }
  });
};
