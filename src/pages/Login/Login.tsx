import {
    Grid,
    Button,
    TextField,
    Typography
} from '@material-ui/core';
import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import ReCAPTCHA from 'react-google-recaptcha';
import { Formik, FormikProps } from 'formik';
import * as Yup from 'yup';

import './login.css';

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
        paddingTop: '100px',
        maxWidth: '520px',
        ['@media (min-width:1024px)']: {
            margin: '30px auto'
        },
        ['@media (max-width:768px)']: {
            margin: '30px 10px'
        }
    },
    btnSubmit: {
        textTransform: 'capitalize'
    },
    formItem: {
        margin: '0px auto 30px auto'
    },
    recaptcha__1: {
        position: 'fixed',
        left: '0px',
        top: '0px',
        width: '100vw',
        height: '100%',
        justifyContent: 'center',
        alignContent: 'center',
        flexDirection: 'column',
        display: 'grid',
        backgroundColor: '#33333342',
        margin: '0px',
    }
});

interface ILoginForm {
    email: string
    password: string
}

interface IFormStatus {
    message: string
    type: string
}

interface IFormStatusProps {
    [key: string]: IFormStatus
}

const formStatusProps: IFormStatusProps = {
    success: {
        message: 'Logged in successfully.',
        type: 'success',
    },
    error: {
        message: 'Something went wrong. Please try again.',
        type: 'error',
    },
}
function Login() {
    const classes = useStyles();
    // const site_key = process.env.SITE_KEY;

    const [displayFormStatus, setDisplayFormStatus] = useState(false);
    const [formStatus, setFormStatus] = useState<IFormStatus>({
        message: '',
        type: '',
    })

    const loginUser = async (data: ILoginForm, resetForm: Function) => {
        try {
            // API call integration will be here. Handle success / error response accordingly.
            if (data) {
                setFormStatus(formStatusProps.success)
                resetForm({})
            }
        } catch (error) {
            setFormStatus(formStatusProps.error)
        } finally {
            setDisplayFormStatus(true)
        }
    }

    const recaptchaRef = React.createRef<ReCAPTCHA>();
    let isVisibleRecaptcha = false;
    // let isRecaptchaVerified = false;
    const onSubmit = () => {
        if ( recaptchaRef.current ){
            console.log(recaptchaRef.current.getValue());
            // isRecaptchaVerified = true;
            isVisibleRecaptcha = false;
        }
        else{
            // isRecaptchaVerified = false;
            isVisibleRecaptcha = true;
        }
    }

    return (
        <div className={classes.loginPage}>
            <Formik
                initialValues={{
                    email: '',
                    password: ''
                }}
                onSubmit={(values: ILoginForm, actions) => {
                    isVisibleRecaptcha = true;
                    loginUser(values, actions.resetForm)
                    setTimeout(() => {
                        actions.setSubmitting(false)
                    }, 500)
                }}
                validationSchema={Yup.object().shape({
                    email: Yup.string()
                        .email()
                        .required('Enter valid email-id'),
                    password: Yup.string()
                        .matches(
                            /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[!@#$%^&*()]).{8,20}\S$/
                        )
                        .required(
                            'Please valid password. One uppercase, one lowercase, one special character, 8 characters at least and no spaces'
                        )
                })}
            >
                {(props: FormikProps<ILoginForm>) => {
                    const {
                        touched,
                        errors,
                        handleBlur,
                        handleChange,
                        isValid
                    } = props
                    return(
                        <Grid container>
                            <Typography component="h5" variant="h5" style={{margin:'auto',width: '100%'}}>
                                Welcome to Youmeme Admin
                            </Typography>
                            <Grid item sm={12} className={classes.formSection}>
                                <form>
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
                                        helperText={
                                            errors.email && touched.email
                                                ? errors.email
                                                : 'Enter your email.'
                                        }
                                        error={
                                            errors.email && touched.email
                                                ? true
                                                : false
                                        }
                                        onChange={handleChange}
                                        onBlur={handleBlur}
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
                                        helperText={
                                            errors.password && touched.password
                                                ? 'Please valid password. One uppercase, one lowercase, one special character and no spaces'
                                                : 'Enter your password'
                                        }
                                        error={
                                            errors.password && touched.password
                                                ? true
                                                : false
                                        }
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                    />
                                    <Button
                                        type="submit"
                                        fullWidth
                                        // onClick={e => onFormSubmit(e)}
                                        variant="contained"
                                        color="primary"
                                        className={classes.btnSubmit}
                                        disabled={!isValid}
                                    >
                                        Login
                                    </Button>
                                    
                                </form>
                                
                                { isVisibleRecaptcha?
                                    <Grid item
                                        className={classes.recaptcha__1}>
                                        <form onSubmit={onSubmit} >
                                            <ReCAPTCHA
                                                ref={recaptchaRef}
                                                sitekey="6Lc1nqwaAAAAABfi4ZsZ1QYjhYWPouU7pwJAgYEY"
                                                onChange={onSubmit}
                                            />
                                        </form>
                                    </Grid>
                                    :null}
                            </Grid>
                        </Grid>
                        )
                    }
                }
            </Formik>
        </div>
    )
}

export default Login;