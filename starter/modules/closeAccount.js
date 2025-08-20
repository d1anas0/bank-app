import {
  inputCloseUsername,
  inputClosePin,
  btnClose,
  containerApp,
} from '../utils/elements.js';
import { accounts } from '../utils/data.js';
import { currentAccount } from '../script.js';

// export const closeAccount = () => {
//   btnClose.addEventListener('click', e => {
//     e.preventDefault();

//     // match account username to inputCloseUsername
//     const matchUser = accounts.find(
//       account => account.username === inputCloseUsername.value
//     );

//     // confirm PIN is correct
//     const getInputPin = Number(inputClosePin.value);
//     const matchPIN = accounts.find(account => account.pin === getInputPin);

//     deleteAccount(matchUser, matchPIN);
//   });
// };

// // if username AND pin matches
// const deleteAccount = (matchUser, matchPIN) => {
//   let accountToDelete;
//   matchUser === matchPIN
//     ? (accountToDelete = matchUser)
//     : alert('No such user');

//   if (accountToDelete) {
//     console.log('confirmed correct user');

//     // remove matched account from accounts array
//     const remainingAccounts = accounts.filter(
//       account => account !== accountToDelete
//     );
//     console.log('remainingAccounts', remainingAccounts);

//     inputCloseUsername.value = '';
//     inputClosePin.value = '';

//     return remainingAccounts;
//   } else {
//     return alert('oops');
//   }
// };

// well actually... only the user who is already logged in should be able to delete his account. The lectures found to using 'findIndex', verification of the credentials, make another attempt to implement this close account function where ONLY the current user can delete their account, and not anyone elses.

export const closeAccount = () => {
  btnClose.addEventListener('click', e => {
    e.preventDefault();

    if (
      inputCloseUsername.value === currentAccount.username &&
      Number(inputClosePin.value) === currentAccount.pin
    ) {
      const index = accounts.findIndex(
        account => account.username === currentAccount.username
      );
      console.log('Close this account:', index, [...accounts]);
      accounts.splice(index, 1);
      console.log('remaining accounts -', accounts);
      inputCloseUsername.value = inputClosePin.value = '';
      containerApp.style.opacity = 0;
    } else {
      alert('incorrect details entered');
      inputCloseUsername.value = inputClosePin.value = '';
    }
  });
};
