import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
   
    
    
    appBar: {
        top: 'auto',
        bottom: 0,
    },
}));


function FooterComponent() {
    const classes = useStyles ();
    return (
        <AppBar position='fixed'
                color="primary"
                className={classes.appBar}
                            
        >
            <div style={{
                width: '450px',
                position: 'relative',
                left: 0,
                right: 0,
                margin: 'auto',
                }}
            >
                <Typography variant="subtitle2"
                            align='center'
                >
                     ©TatsianaKomar, 2020
                </Typography>
            </div>
        </AppBar>
);
}



export default FooterComponent;