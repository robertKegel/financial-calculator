import { InputAdornment } from "@material-ui/core";

export const simpleLoanInputGridProps = [
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

export const presentValueInputGridProps = [
  {
    id: 'fv',
    label: 'Future Value',
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
    label: 'Rate per period',
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
    label: 'Number of periods',
    type: 'number',
    variant: "outlined",
    InputProps: null,
    inputProps: {
      min: 0,
      max: 1200
    }
  }
]

export const futureValueInputGridProps = [
  {
    id: 'pv',
    label: 'Present Value',
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
    label: 'Rate per period',
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
    label: 'Number of periods',
    type: 'number',
    variant: "outlined",
    InputProps: null,
    inputProps: {
      min: 0,
      max: 1200
    }
  }
]

export const loanAmountInputGridProps = [
  {
    id: 'payment',
    label: 'Monthly Payment',
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