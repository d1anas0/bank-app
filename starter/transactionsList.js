import accounts from './data.js';

const transactions = accounts.movement;
export const displayMovements = transactions => {
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
};
