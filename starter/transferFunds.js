import accounts from './data.js';
import updateUI from './updateUI.js';
import {
  btnTransfer,
  inputTransferAmount,
  inputTransferTo,
} from './elements.js';

const transferFunds = currentAccount => {
  btnTransfer.addEventListener('click', e => {
    e.preventDefault();
    const recipient = accounts.find(
      account => inputTransferTo.value === account.username
    );

    let currentAccountTransactions = currentAccount.movements;
    let receiverAccountTransactions = recipient.movements;
    const transferAmount = Number(inputTransferAmount.value);

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

      updateUI(currentAccount);
    } else {
      console.log('Please check your inputs and try again');
    }

    inputTransferTo.value = '';
    inputTransferAmount.value = '';
  });
};
// issue: when you click transfer, the app restarts

export default transferFunds;
