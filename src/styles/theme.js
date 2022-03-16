import { blue } from '@mui/material/colors'
import { createTheme } from '@mui/material/styles'

export const theme = createTheme({
  palette: {
    primary: {
      main: blue[600],
    },
  },
  typography: {
    body1: {
      fontFamily: ['NeueHaasDisplay'],
      fontStyle: 'normal',
      fontWeight: 400,
    },
    body2: {
      fontFamily: ['TTCommons'],
      fontStyle: 'normal',
      fontWeight: 400,
    },
  },
})
