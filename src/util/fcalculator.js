/** 
* Calculates the loan payment for n number of periods 
* 
* @param{number}rate - The interest rate per period
* @param{number}term - The number of periods  
* @param{number}amount - The initial loan amount
* @return{number}The calculated Loan Payment
*/

export function simpleLoanPayment(rate, term, amount) {
  return (amount * rate)  / (1 - (1 + rate)**(-term))
}
