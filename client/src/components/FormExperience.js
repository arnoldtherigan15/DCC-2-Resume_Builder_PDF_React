import React, { useState, useEffect } from 'react'
import { AppBar, TextField, Typography, Toolbar, Button } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import axios from 'axios'
import { saveAs } from 'file-saver'

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

const FormExperience = ({ nextStep, backStep, values, handleChange }) => {
    const classes = useStyles();
    const [ isContinue, setIsContiune ] = useState(false)
    const { firstName, lastName, email, occupation, bio, url, dateBirth, address, phone, expOrg, expPos, expDur, expDesc } = values
    let data = new FormData()

    useEffect(()=> {
        if(expOrg && expDur && expPos && expDesc) {
            setIsContiune(true)
        } else {
            setIsContiune(false)
        }
    },[expOrg, expDur, expPos, expDesc])
    data.append('url', url)
    data.append('firstName', firstName)
    data.append('lastName', lastName)
    data.append('email', email)
    data.append('occupation', occupation)
    data.append('bio', bio)
    data.append('dateBirth', dateBirth)
    data.append('address', address)
    data.append('phone', phone)
    data.append('expOrg', expOrg)
    data.append('expPos', expPos)
    data.append('expDur', expDur)
    data.append('expDesc', expDesc)
    const next = (event) => {
        event.preventDefault()
        nextStep()
        axios({
            method: 'post',
            url: 'http://localhost:5000/create-pdf',
            data
        })
            .then(() => {
                return axios({
                    method: 'get',
                    url: 'http://localhost:5000/fetch-pdf',
                    responseType: 'blob'
                })
            })
            .then(res => {
                const pdfBlog = new Blob([res.data], { type: 'application/pdf' })
                saveAs(pdfBlog, `${values.firstName}_resume.pdf`)
            })
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
                <TextField name="expOrg" defaultValue={values.expOrg} onChange={handleChange} label="Organization" required style={{ margin:'10px 0' }} />
                <TextField name="expPos" defaultValue={values.expPos} onChange={handleChange} label="Position" required style={{ margin:'10px 0' }} />
                <TextField name="expDur" defaultValue={values.expDur} onChange={handleChange} label="Duration" required style={{ margin:'10px 0' }} />
                <TextField name="expDesc" defaultValue={values.expDesc} onChange={handleChange} label="Description" required style={{ margin:'10px 0' }} />
                <Button onClick={back} variant="contained" color="primary" style={{ margin: '10px 0'  }}>
                    Back
                </Button>
                {
                    isContinue ? (
                        <Button onClick={next} variant="contained" color="primary" style={{ margin: '10px 0'  }}>
                            Save
                        </Button>
                    ) : (
                        <Button variant="contained" disabled style={{ margin: '10px 0'  }}>
                            Save
                        </Button>
                    )
                }
            </form>
            </div>
        </React.Fragment>
    )
}


export default FormExperience