import { Grid, Typography } from '@material-ui/core';


export default function ResultGrid(props) {

  const classes = props.classes;
  const values = props.valueProps;
  const resultProps = props.resultProps;

  return (
    <Grid container className={classes.results} alignContent='center' direction='column'>
      {resultProps.map(result => {
        return(
          <Grid container>
            <Grid item xs={6}>
              <Typography variant={result.variant} align='left' >
                {result.label}
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography variant={result.variant} align='right'>
                {( values[result.id] && "$ " + values[result.id].toLocaleString('en-US', {minimumFractionDigits: 2, maximumFractionDigits: 2}) ) || '...'}
              </Typography>
            </Grid>
          </Grid>
        )
      })}
    </Grid>
  )
}