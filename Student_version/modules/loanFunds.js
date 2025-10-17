// implement LOAN functionality using array.some()
// condition = there must be at least 1 deposit of minimum 10% of the loan amount. 

import { btnLoan, inputLoanAmount } from "../utils/elements.js";
import { currentAccount } from "../script.js";
import { updateUI } from "./updateUI.js";

export const loanRequest = () => {
    btnLoan.addEventListener('click', e => {
        e.preventDefault()

        // variables & definitions
        const transactions = currentAccount.movements
        const requestedAmount = Number(inputLoanAmount.value)
        const minimumDepositedAmount = requestedAmount * 0.1
        
        const eligibleDeposit = (deposit) => deposit >= minimumDepositedAmount;
        const loanReject = () => alert("Unfortunately the account does not meet our loan requirements, and your loan request has been rejected.")
        const loanSuccess = () => transactions.push(requestedAmount) && alert('Your request for a loan of funds has been SUCCESSFUL, the requested amount will be deposited to your account within 3 business days.')
        
        // condition 
        const eligibleDepositVerification = transactions.some(eligibleDeposit);
        
        // business logic 
        requestedAmount > 0 && eligibleDepositVerification 
       ? loanSuccess()
       : loanReject()

        // update UI
        updateUI(currentAccount) 
        inputLoanAmount.value = ""
    })
} 