import { accounts } from '../utils/data.js';

export const createUsernames = () => {
  // usernames = initials only, in lower case
  const usernames = accounts.forEach(account => {
    account.username = account.owner
      .toLowerCase()
      .split(' ')
      .map(name => name[0])
      .join('');
  });

  console.log('try', usernames);
  return usernames;
};
