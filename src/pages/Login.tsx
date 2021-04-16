import {
    FormControl,
    InputLabel,
    Input,
    FormHelperText,
    Grid,
    Button,
    TextField,
    Typography
} from '@material-ui/core';
import * as React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ReCAPTCHA, { ReCAPTCHA as ReCAPTCHA2 } from 'react-google-recaptcha';
const useStyles = makeStyles({

    loginPage: {
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
    },
    formSection: {
        backgroundColor: 'white', 
        padding: '40px',
        margin: '30px 100px',
        paddingTop: '100px'
    },
    btnSubmit: {
        textTransform: 'capitalize'
    },
    formItem: {
        margin: '0px auto 30px auto'
    },
    recaptcha__1: {
        position: 'absolute',
        marginTop: '10px'
    }
});

const recaptchaRef = React.createRef<ReCAPTCHA>();

function Login() {
    const classes = useStyles();
    
    return (
        <div className={classes.loginPage}>
            <Grid container>
                <Typography component="h5" variant="h5" style={{margin:'auto'}}>
                    Welcome to Youmeme Admin
                </Typography>
                <Grid item sm={12} className={classes.formSection}>
                    <form noValidate>
                        <TextField
                            variant="outlined"
                            margin="normal"
                            fullWidth
                            id="email"
                            label="Email/Username"
                            name="email"
                            autoComplete="email"
                            autoFocus
                            className={classes.formItem}
                        />
                        <TextField
                            variant="outlined"
                            margin="normal"
                            fullWidth
                            name="password"
                            label="Password"
                            type="password"
                            id="password"
                            autoComplete="current-password"
                            className={classes.formItem}
                        />
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                            className={classes.btnSubmit}
                        >
                            Login
                        </Button>
                        <Grid item
                            className={classes.recaptcha__1}>
                            <ReCAPTCHA
                                ref={recaptchaRef}
                                sitekey="6Lc1nqwaAAAAABfi4ZsZ1QYjhYWPouU7pwJAgYEY"
                            />
                        </Grid>
                    </form>
                </Grid>
            </Grid>
        </div>
    )
}

export default Login;