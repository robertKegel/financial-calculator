import { simpleLoanPayment } from '../../util/fcalculator';
import { simpleLoanInputGridProps } from '../../util/inputprops';
import { simpleLoanResultsProps } from '../../util/resultprops';
import { useState } from 'react';
import { Container, Paper, Typography, Divider } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import InputGrid from '../InputGrid/InputGrid';
import ResultGrid from '../ResultGrid/ResultGrid';


const useStyles = makeStyles({
  loanContainer: {
    margin: '15px',
    padding: '15px'
  },
  divHR: {
    margin: '20px'
  },
  term: {
    width: '180px'
  },
  amount: {
    width: '180px'
  },
  rate: {
    width: '180px'
  },
  results: {
    maxWidth: '320px',
    margin: 'auto'
  }
});


export default function SimpleLoan(props) {
  
  const classes = useStyles();

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


  let payment, totalInterest, totalPayments = 0;

  if (rate && term && amount) {
    payment = simpleLoanPayment(rate / 1200, term, amount);
    totalPayments = payment * term;
    totalInterest = totalPayments - amount;
  }

  return (
    <Container maxWidth='sm'>
      <Paper className={classes.loanContainer}>
        <Typography align='center' variant='h5' >
          Simple Loan Payment
        </Typography>
        <Divider variant='middle' className={classes.divHR} />
        <InputGrid handleChange={handleChange} valueProps={{ rate, term, amount }} inputProps={simpleLoanInputGridProps} classes={classes} />
      </Paper>
      <Paper className={classes.loanContainer}>
        <Typography align='center' variant='h6'>
          Results
        </Typography>
        <Divider variant='middle'/>
        <ResultGrid valueProps={{ payment, totalInterest, totalPayments }} resultProps={simpleLoanResultsProps} classes={classes} />
      </Paper>
    </Container>
  )
}