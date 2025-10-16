import { containerMovements } from '../utils/elements.js';

export const displayTransactions = transactions => {
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

  // log out last big withdrawal using findLast() and findLastIndex() methods (lecture #168)
  const lastBigWithdrawal = transactions.findLast((withdrawal) => withdrawal <  -500);
  const indexOfLastBigWithdrawal = transactions.findLastIndex((withdrawal) => withdrawal <  -500);
  console.log(`The last withdrawal2 you made was of $${Math.abs(lastBigWithdrawal)}, which was ${transactions.length - indexOfLastBigWithdrawal} ${((transactions.length - indexOfLastBigWithdrawal === 1) ? 'transaction' : 'transactions')} ago.`);

  // THE LESS IDEAL way to implement this same 'big withdrawal' function (may not always return the LATEST big withdrawal if there are multiple withdrawals of the same value)
  // const indexOfLastBigWithdrawal = transactions.lastIndexOf(lastBigWithdrawal);
  // console.log(`The last withdrawal you made was of $${Math.abs(lastBigWithdrawal)}, which was ${transactions.length - indexOfLastBigWithdrawal} ${((transactions.length - indexOfLastBigWithdrawal === 1) ? 'transaction' : 'transactions')} ago.`);
};
