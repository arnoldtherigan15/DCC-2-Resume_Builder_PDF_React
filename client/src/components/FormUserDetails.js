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

const FormUserDetails = ({ nextStep, values, handleChange, fileHandleChange }) => {
    const classes = useStyles();

    const [ isContinue, setIsContiune ] = useState(false)
    const { firstName, lastName, email, url, dateBirth, address, phone } = values

    useEffect(()=> {
        if(firstName && lastName && email && url && dateBirth && address && phone)  {
            setIsContiune(true)
        } else {
            setIsContiune(false)
        }
    },[firstName, lastName, email, url, dateBirth, address, phone])

    const next = (event) => {
        event.preventDefault()
        nextStep()
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
                    <TextField name="firstName" defaultValue={values.firstName} onChange={handleChange} label="First Name" required style={{ margin:'10px 0' }} />
                    <TextField name="lastName" defaultValue={values.lastName} onChange={handleChange} label="Last Name" required style={{ margin:'10px 0' }} />
                    <TextField name="email" defaultValue={values.email} onChange={handleChange} label="Email" required style={{ margin:'10px 0' }} />
                    <TextField
                        id="date"
                        label="Birthday"
                        type="date"
                        name="dateBirth"
                        defaultValue={dateBirth}
                        className={classes.textField}
                        onChange={handleChange}
                        InputLabelProps={{
                        shrink: true,
                        }}
                        style={{ margin:'10px 0' }}
                    />
                    <TextField name="address" defaultValue={values.address} onChange={handleChange} label="Address" required style={{ margin:'10px 0' }} />
                    <TextField name="phone" defaultValue={values.phone} onChange={handleChange} label="Phone" required style={{ margin:'10px 0' }} />
                    <input type="file" name="url" onChange={fileHandleChange} />
                    {
                        isContinue ? (
                            <Button onClick={next} variant="contained" color="primary" style={{ margin: '10px 0' }}>
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


export default FormUserDetails