import { simpleLoanPayment } from '../../util/fcalculator';
import { useState } from 'react';
import { Container, Paper, Grid, TextField, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  loanContainer: {
    marginTop: '25px'
  }
});


export default function SimpleLoan(props) {
  
  const [rate, setRate] = useState();
  const [term, setTerm] = useState();
  const [amount, setAmount] = useState();

  const setStateObject = {
    rate: setRate,
    term: setTerm,
    amount: setAmount
  }
  
  
  const handleChange = (event) => {
    setStateObject[event.target.id](event.target.value);
  }

  const classes = useStyles();
  let payment, totalInterest, totalPayments = 0;

  if (rate && term && amount) {
    payment = simpleLoanPayment(rate / 1200, term, amount);
    totalPayments = payment * term;
    totalInterest = totalPayments - amount;
  }

  return (
    <Container>
      <Paper className={classes.loanContainer}>
        <Typography align='center' variant='h4' >
          Simple Loan Payment
        </Typography>
        <hr></hr>
        <Grid container spacing={3} justify='space-around'>
          <Grid item xs='auto'>
            <TextField
              id="amount"
              label="Loan Amount"
              type="number"
              variant="outlined"
              value={amount}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs='auto'>
            <TextField
              id="rate"
              label="Interest Rate"
              type="number"
              variant="outlined"
              value={rate}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs='auto'>
            <TextField
              id="term"
              label="Term (Months)"
              type="number"
              variant="outlined"
              value={term}
              onChange={handleChange}
            />
          </Grid>
        </Grid>
      </Paper>
      <Paper className={classes.loanContainer}>
        <Typography align='center' variant='h4'>
          Results
        </Typography>
        <hr></hr>
        <Grid container align='center'>
          <Grid item xs={12}>
            <Typography variant='h6'>
              Monthly Payment: {payment && "$ " + payment.toFixed(2) || '...'}
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant='h6'>
              Total Interest: {totalInterest && "$ " + totalInterest.toFixed(2) || '...'}
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant='h6'>
              Total Payments: {totalPayments && "$ " + totalPayments.toFixed(2) || '...'}
            </Typography>
          </Grid>
        </Grid>
      </Paper>
    </Container>
  )
}