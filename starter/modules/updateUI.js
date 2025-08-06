import {
  calculateDisplayBalance,
  calcDisplaySummaries,
} from '../utils/calculations.js';
import { displayTransactions } from './displayTransactions.js';

export const updateUI = currentAccount => {
  calculateDisplayBalance(currentAccount);
  calcDisplaySummaries(currentAccount);
  displayTransactions(currentAccount.movements);
};
