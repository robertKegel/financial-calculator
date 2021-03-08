/** 
* Calculates the loan payment for n number of periods 
* 
* @param{number}rate - The interest rate per period
* @param{number}term - The number of periods  
* @param{number}amount - The initial loan amount
* @return{number}The calculated Loan Payment
*/
export function simpleLoanPayment(rate, term, amount) {
  
  if (rate === 0) {
    return amount / term
  }
  
  if (term === 0) {
    return amount
  }

  if (amount === 0) {
    return 0
  }

  return (amount * rate)  / (1 - (1 + rate)**(-term))
}


/** 
* Calculates the Net Present Value of a given initial investment 
* cost and an array of cash flow values with the specified discount rate 
* 
* @param{number}rate - The discount rate percentage 
* @param{number}initialCost - The initial investment 
* @param{array}cashFlows - An array of future payment amounts 
* @return{number}The calculated Net Present Value 
*/
export function getNPV(rate, initialCost, cashFlows) {
  return cashFlows.reduce((accumulator, currentValue, index) =>accumulator + currentValue / Math.pow(rate / 100 + 1, index + 1),initialCost )
}


/**
 * Present Value (PV) is a formula used in Finance that calculates the 
 * present day value of an amount that is received at a future date. 
 * The premise of the equation is that there is "time value of money".
 * 
 * @param{number}rate - The discount rate percentage per period
 * @param{number}term - The number of periods
 * @param{number}amount - The cash flow at a future period
 * @return{number}The calculated Present Value
 */
export function getPV(rate, term, amount) {
  return amount / ((1 + rate)**term)
}

/**
 * Future Value (FV) is a formula used in finance to calculate the value 
 * of a cash flow at a later date than originally received. This idea that 
 * an amount today is worth a different amount than at a future time is based 
 * on the time value of money. 
 * 
 * @param{number}rate - The discount rate percentage per period
 * @param{number}term - The number of periods
 * @param{number}amount - The cash flow at current period
 * @return{number}The calculated Future Value
 */
export function getFV(rate, term, amount) {
  return amount * ((1 + rate)**term)
}
