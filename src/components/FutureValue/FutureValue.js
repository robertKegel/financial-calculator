import { getFV } from '../../util/fcalculator';
import { futureValueInputGridProps } from '../../util/inputprops';
import { futureValueResultGridProps } from '../../util/resultprops';
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
  pv: {
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


export default function FutureValue(props) {

  const [pv, setPV] = useState();
  const [rate, setRate] = useState();
  const [term, setTerm] = useState();

  const setStateObject = {
    rate: setRate,
    term: setTerm,
    pv: setPV
  }
  
  
  const handleChange = (event) => {
    setStateObject[event.target.id](event.target.value);
  }

  const classes = useStyles();

  let fv = 0;
  if (pv && rate && term) {
    fv = getFV(rate/100, term, pv);
  }

  return (
    <Container maxWidth='sm'>
      <Paper className={classes.loanPaper}>
        <Typography align='center' variant='h5' >
          Future Value
        </Typography>
        <Divider variant='middle' className={classes.divHR} />
        <InputGrid handleChange={handleChange} valueProps={{ pv, rate, term }} inputProps={futureValueInputGridProps} classes={classes} />
      </Paper>
      <Paper className={classes.loanPaper}>
        <Typography align='center' variant='h6'>
          Results
        </Typography>
        <Divider variant='middle' className={classes.divHR} />
        <ResultGrid valueProps={{ fv }} resultProps={futureValueResultGridProps} classes={classes} />
      </Paper>
    </Container>
  )

}