import React from 'react'
import { AppBar, List, ListItem, ListItemIcon, ListItemText, Typography, Toolbar, Button } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import InboxIcon from '@material-ui/icons/Inbox'
import DraftsIcon from '@material-ui/icons/Drafts'
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

const FormPersonalDetails = ({ nextStep, backStep, values }) => {
    const classes = useStyles();
    const { firstName, lastName, email, occupation, bio, url, dateBirth, address, phone, expOrg, expPos, expDur, expDesc } = values
    let data = new FormData()
    console.log(url,'-------------------');
    
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
    console.log(data,'nessss dataaaaaaaaa');
    
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
        
        </React.Fragment>
    )
}


export default FormPersonalDetails