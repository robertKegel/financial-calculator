import { getNPV } from '../../util/fcalculator';
import { loanAmountInputGridProps } from '../../util/inputprops';
import { loanAmountResultGridProps } from '../../util/resultprops';
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
  payment: {
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
  const [payment, setPayment] = useState();

  const setStateObject = {
    rate: setRate,
    term: setTerm,
    payment: setPayment
  }
  
  const handleChange = (event) => {
    setStateObject[event.target.id](event.target.value);
  }


  let amount, totalInterest, totalPayments = 0;
  let paymentArray = [];

  if (rate && term && payment) {
    for (let i=0; i < term; i++){
      paymentArray.push(payment);
    }
    amount = getNPV(rate / 12, 0, paymentArray);
    totalPayments = payment * term;
    totalInterest = totalPayments - amount;
  }

  return (
    <Container maxWidth='sm'>
      <Paper className={classes.loanContainer}>
        <Typography align='center' variant='h5' >
          Simple Loan Amount
        </Typography>
        <Divider variant='middle' className={classes.divHR} />
        <InputGrid handleChange={handleChange} valueProps={{ rate, term, payment }} inputProps={loanAmountInputGridProps} classes={classes} />
      </Paper>
      <Paper className={classes.loanContainer}>
        <Typography align='center' variant='h6'>
          Results
        </Typography>
        <Divider variant='middle'/>
        <ResultGrid valueProps={{ amount, totalPayments, totalInterest }} resultProps={loanAmountResultGridProps} classes={classes} />
      </Paper>
    </Container>
  )
}