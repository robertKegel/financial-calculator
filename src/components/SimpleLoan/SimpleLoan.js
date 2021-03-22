import { simpleLoanPayment } from '../../util/fcalculator';
import { useState } from 'react';
import { Container, Paper, Grid, Typography, InputAdornment, Divider } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import InputGrid from '../InputGrid/InputGrid';


const useStyles = makeStyles({
  loanContainer: {
    margin: '15px',
    padding: '5px'
  },
  divHR: {
    margin: '10px'
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
  },
  resultsPayment: {
    marginLeft: '10px'
  },
  resultsTotal: {
    marginLeft: '15px'
  }
});

const simpleLoanInputGridProps = [
  {
    id: 'amount',
    label: 'Loan Amount',
    type: 'number',
    variant: "outlined",
    InputProps: {
      startAdornment: <InputAdornment position="start">$</InputAdornment>
    },
    inputProps: {
      min: 0,
      step: 100
    }
  },
  {
    id: 'rate',
    label: 'Interest Rate',
    type: 'number',
    variant: "outlined",
    InputProps: {
      endAdornment: <InputAdornment position="end">%</InputAdornment>
    },
    inputProps: {
      step: 0.125
    }
  },
  {
    id: 'term',
    label: 'Term (Months)',
    type: 'number',
    variant: "outlined",
    InputProps: null,
    inputProps: {
      min: 0,
      max: 1200
    }
  }
]


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
    <Container>
      <Paper className={classes.loanContainer}>
        <Typography align='center' variant='h3' >
          Simple Loan Payment
        </Typography>
        <Divider variant='middle' className={classes.divHR} />
        <InputGrid handleChange={handleChange} valueProps={{ rate, term, amount }} inputProps={simpleLoanInputGridProps} classes={classes} />
      </Paper>
      <Paper className={classes.loanContainer}>
        <Typography align='center' variant='h4'>
          Results
        </Typography>
        <Divider variant='middle'/>
        <Grid container className={classes.results}>
          <Grid item xs={12}>
            <Typography variant='h6' className={classes.resultsPayment}>
              Monthly Payment: {( payment && "$ " + payment.toFixed(2) ) || '...'}
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant='body1' className={classes.resultsTotal}>
              Total Interest: {( totalInterest && "$ " + totalInterest.toFixed(2) ) || '...'}
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant='body2' className={classes.resultsTotal}>
              Total Payments: {( totalPayments && "$ " + totalPayments.toFixed(2) ) || '...'}
            </Typography>
          </Grid>
        </Grid>
      </Paper>
    </Container>
  )
}