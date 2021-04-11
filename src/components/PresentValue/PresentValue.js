import { getPV } from '../../util/fcalculator';
import { presentValueInputGridProps } from '../../util/inputprops';
import { presentValueResultGridProps } from '../../util/resultprops';
import { useState } from 'react';
import { Container, Paper, Typography, Divider } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import InputGrid from '../InputGrid/InputGrid';
import ResultGrid from '../ResultGrid/ResultGrid';

const useStyles = makeStyles({
  loanPaper: {
    margin: '15px',
    padding: '15px'
  },
  divHR: {
    margin: '20px'
  },
  term: {
    width: '180px'
  },
  fv: {
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
    <Container maxWidth='sm'>
      <Paper className={classes.loanPaper}>
        <Typography align='center' variant='h5' >
          Present Value
        </Typography>
        <Divider variant='middle' className={classes.divHR} />
        <InputGrid handleChange={handleChange} valueProps={{ fv, rate, term }} inputProps={presentValueInputGridProps} classes={classes} />
      </Paper>
      <Paper className={classes.loanPaper}>
        <Typography align='center' variant='h6'>
          Results
        </Typography>
        <Divider variant='middle' className={classes.divHR} />
        <ResultGrid valueProps={{ pv }} resultProps={presentValueResultGridProps} classes={classes} />
      </Paper>
    </Container>
  )

}