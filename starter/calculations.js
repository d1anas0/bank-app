export const calculateDisplayBalance = account => {
  account.balance = account.movements.reduce(
    (account, movement) => account + movement,
    0
  );
  labelBalance.textContent = `${account.balance} €`;
  console.log('calculated display balance', account.balance);
  return account.balance;
};

export const calcDisplaySummaries = transactions => {
  // Deposits
  const incomes = transactions.movements
    .filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  console.log('totalDeposits (instructor) - ', incomes);
  labelSumIn.textContent = `${incomes}€`;

  // Withdrawals
  const totalWithdrawals = transactions.movements.reduce(
    (acc, mov) => (mov < 0 ? (acc += mov) : acc),
    0
  );
  console.log('totalWithdrawals', totalWithdrawals);
  labelSumOut.textContent = `${Math.abs(totalWithdrawals)}€`;

  // Interest
  const interest = transactions.movements
    .filter(mov => mov > 0)
    .map(deposit => (deposit * transactions.interestRate) / 100)
    .filter((int, i, arr) => {
      return int >= 1;
    })
    .reduce((acc, int) => acc + int, 0);
  console.log('interest', interest);
  labelSumInterest.textContent = `${interest}€`;
};
