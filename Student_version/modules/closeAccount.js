import {
  inputCloseUsername,
  inputClosePin,
  btnClose,
  containerApp,
} from '../utils/elements.js';
import { accounts } from '../utils/data.js';
import { currentAccount } from '../script.js';

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
      containerApp.style.opacity = 0;
    } else {
      alert('incorrect details entered');
    }
    inputCloseUsername.value = inputClosePin.value = '';
  });
};
