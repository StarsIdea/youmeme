import Grid from "@material-ui/core/Grid/Grid";
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { makeStyles } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#816ad6',
    },
    secondary: {
      main: '#f44336',
    },
  },
});

const useStyles = makeStyles({
    root: {
      height: '100vh',
      margin: 'auto',
    },
    whiteLogo: {
        filter: 'invert(1)',
        width: '50%',
        maxWidth: '360px'
    },
    lSection: {
        backgroundColor: '#816ad6',
        height: '100vh',
        display:'flex'
    },
    rSection:{
        backgroundColor: '#f9f9f9',
        height: '100vh',
    }
});

interface IAuth {
    logo: string,
    children: JSX.Element
}
function Auth({ logo, children }: IAuth) {
    const classes = useStyles();
    return (
        <ThemeProvider theme={theme}>
            <div className="authLayout">
                <Grid container
                    className={classes.root}
                    direction="row"
                    justify="center"
                >
                    <Grid container
                        item xs={12} 
                        md={6}
                        className={classes.lSection}
                        direction="row"
                        justify="center"
                    >
                        <img src={logo} className={classes.whiteLogo} alt="logo" />
                    </Grid>
                    <Grid container
                        item xs={12} 
                        md={6}
                        className={classes.rSection}
                        direction="row"
                        justify="center"
                    >
                        { children }
                    </Grid>
                </Grid>
            </div>
        </ThemeProvider>
    )
}

export default Auth;
