import { getPV } from '../../util/fcalculator';
import { useState } from 'react';
import { Container, Paper, Grid, TextField, Typography, InputAdornment, Divider } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  loanPaper: {
    margin: '15px',
    padding: '5px'
  },
  divHR: {
    margin: '10px'
  },
  termInput: {
    width: '180px'
  },
  amountInput: {
    width: '180px'
  },
  rateInput: {
    width: '180px'
  },
  results: {
    maxWidth: '320px',
    margin: 'auto'
  },
  resultsPV: {
    marginLeft: '10px',
    fontAlign: 'center'
  },
});

export default function PresentValue(props) {

  const [fv, setFV] = useState();
  const [rate, setRate] = useState();
  const [term, setTerm] = useState();

  const setStateObject = {
    rate: setRate,
    term: setTerm,
    fv: setFV
  }
  
  
  const handleChange = (event) => {
    setStateObject[event.target.id](event.target.value);
  }

  const classes = useStyles();

  let pv = 0;
  if (fv && rate && term) {
    pv = getPV(rate/100, term, fv);
  }

  return (
    <Container maxWidth='md'>
      <Paper className={classes.loanPaper}>
        <Typography align='center' variant='h3' >
          Present Value
        </Typography>
        <Divider variant='middle' className={classes.divHR} />
        <Grid container spacing={8} justify='center'>
          <Grid item xs='auto'>
            <TextField
              id="fv"
              className={classes.amountInput}
              label="Future Value"
              type="number"
              variant="outlined"
              value={fv}
              onChange={handleChange}
              InputProps={{
                startAdornment: <InputAdornment position="start">$</InputAdornment>
              }}
              inputProps={{
                min: 0,
                step: 100
              }}
            />
          </Grid>
          <Grid item xs='auto'>
            <TextField
              id="rate"
              className={classes.rateInput}
              label="Rate per period"
              type="number"
              variant="outlined"
              value={rate}
              onChange={handleChange}
              inputProps={{
                step: 0.125
              }}
              InputProps={{
                endAdornment: <InputAdornment position="end">%</InputAdornment>
              }}
            />
          </Grid>
          <Grid item xs='auto'>
            <TextField
              id="term"
              className={classes.termInput}
              label="Number of periods"
              type="number"
              variant="outlined"
              value={term}
              onChange={handleChange}
              inputProps={{
                min: 0,
                max: 1200
              }}
            />
          </Grid>
        </Grid>
      </Paper>
      <Paper className={classes.loanPaper}>
        <Typography align='center' variant='h4'>
          Results
        </Typography>
        <Divider variant='middle'/>
        <Grid container className={classes.results}>
          <Grid item xs={12}>
            <Typography variant='h6' className={classes.resultsPV}>
              Present Value: {(pv && "$ " + pv.toFixed(2)) || '...'}
            </Typography>
          </Grid>
        </Grid>
      </Paper>
    </Container>
  )

}