import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#431325',
        },
        secondary: {
            main: '#DC1D44',
        },
        accent: {
            main: '#DD99AB',
        },
        info: {
            main: '#FFD964',
        },
    },
    typography: {
        h1: {
            fontFamily: 'Carme',
            fontSize: '3rem',
        },
        h2: {
            fontFamily: 'Carme',
            fontSize: '2rem',
        },
        h3: {
            fontFamily: 'Carme',
            fontSize: '1.5rem',
        },
        body1: {            
            fontFamily: [
              'Montserrat',
              'Helvetica', 
              'Arial',
              'sans-serif',
            ].join(','),
        },
        button: {
            fontFamily: 'Snippet',
            fontSize: '20px',
            textTransform: 'lowercase',
            fontWeight: 700,
        },
    },
});

export default theme;