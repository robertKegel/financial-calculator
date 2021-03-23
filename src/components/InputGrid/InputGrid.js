import { Grid, TextField } from '@material-ui/core';


export default function InputGrid(props) {

  const classes = props.classes;
  const valueProps = props.valueProps;
  const inputProps = props.inputProps;

  return (
    <Grid container spacing={3} alignItems='center' direction='column'>
      {inputProps.map(inputProp => {
        return(
          <Grid item xs='auto'>
            <TextField 
              id={inputProp.id}
              className={classes[inputProp.id]}
              label={inputProp.label}
              type={inputProp.type}
              variant={inputProp.variant}
              value={valueProps[inputProp.id]}
              onChange={props.handleChange}
              InputProps={inputProp.InputProps}
              inputProps={inputProp.inputProps}
            />
          </Grid>
        )
      })}
    </Grid>
  )
}