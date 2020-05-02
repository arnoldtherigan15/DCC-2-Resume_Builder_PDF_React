import React, { useState, useEffect } from 'react'
import { AppBar, TextField, Typography, Toolbar, Button } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        justifyContent: 'center'
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      textAlign: 'center',
    },
}))

const FormPersonalDetails = ({ nextStep, backStep, values, handleChange }) => {
    const classes = useStyles();
    const [ isContinue, setIsContiune ] = useState(false)
    const { bio, occupation } = values

    useEffect(()=> {
        if(bio && occupation) {
            setIsContiune(true)
        } else {
            setIsContiune(false)
        }
    },[bio, occupation])

    const next = (event) => {
        event.preventDefault()
        nextStep()
    }
    const back = (event) => {
        event.preventDefault()
        backStep()
    }

    return (
        <React.Fragment>
            <AppBar position="static">
                <Toolbar className={classes.root}>
                    <Typography variant="h6" className={classes.title}>
                    Resume Builder
                    </Typography>
                </Toolbar>
            </AppBar>
            <div style={{ width: '100%', height: '80vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <form noValidate autoComplete="off" style={{ display: 'flex', flexDirection: 'column' }}>
                <TextField name="occupation" defaultValue={values.occupation} onChange={handleChange} label="occupation" required style={{ margin:'10px 0' }} />
                <TextField name="bio" defaultValue={values.bio} onChange={handleChange} label="bio" required style={{ margin:'10px 0' }} />
                <Button onClick={back} variant="contained" color="primary" style={{ margin: '10px 0'  }}>
                    Back
                </Button>
                {
                    isContinue ? (
                        <Button onClick={next} variant="contained" color="primary" style={{ margin: '10px 0'  }}>
                            Continue
                        </Button>
                    ) : (
                        <Button variant="contained" disabled style={{ margin: '10px 0'  }}>
                            Continue
                        </Button>
                    )
                }
            </form>
            </div>
        </React.Fragment>
    )
}


export default FormPersonalDetails