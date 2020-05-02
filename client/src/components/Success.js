import React from 'react'
import { AppBar, Typography, Toolbar } from '@material-ui/core'
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

const Success = () => {
    const classes = useStyles();
    return(
        <React.Fragment>
            <AppBar position="static">
                <Toolbar className={classes.root}>
                    <Typography variant="h6" className={classes.title}>
                    Resume Builder
                    </Typography>
                </Toolbar>
            </AppBar>
            <div style={{ width:'100vw', height: '80vh', display: 'flex', justifyContent: 'center', alignItems:'center' }}>
                <h1>Wait for the resume to download</h1>
            </div>
        </React.Fragment>
    )
}

export default Success