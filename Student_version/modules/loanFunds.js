// implement LOAN functionality using array.some()
// condition = there must be at least 1 deposit of minimum 10% of the loan amount. 

import { btnLoan, inputLoanAmount } from "../utils/elements.js";
import { currentAccount } from "../script.js";
import { updateUI } from "./updateUI.js";

export const loanRequest = () => {
    btnLoan.addEventListener('click', e => {
        e.preventDefault()

        // variables
        const requestedAmount = Number(inputLoanAmount.value)
        const transactions = currentAccount.movements
        const minimumDepositedAmount = requestedAmount * 0.1
        
        // condition 
        const eligibleDepositVerification = transactions.some(deposit => deposit >= minimumDepositedAmount);

        // business logic 
       requestedAmount > 0 && eligibleDepositVerification ? transactions.push(requestedAmount) && alert('Your request for a loan of funds has been SUCCESSFUL, the requested amount will be deposited to your account within 3 business days.'): alert("Unfortunately the account does not meet our loan requirements, and your loan request has been rejected.")

        // update UI
        updateUI(currentAccount) 
        inputLoanAmount.value = ""
    })
} 