import {
  calculateDisplayBalance,
  calcDisplaySummaries,
} from './calculations.js';
import { displayMovements } from './transactionsList.js';

export const updateUI = currentAccount => {
  calculateDisplayBalance(currentAccount);
  calcDisplaySummaries(currentAccount);
  displayMovements(currentAccount.movements);
};
