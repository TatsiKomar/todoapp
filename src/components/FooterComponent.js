import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';


function FooterComponent() {
    return (
        <AppBar position='fixed'
                color="primary"
                classes={{
                    root:'footerStyle'
                }}
        >
            Todo App by Tatsiana © 2020

        </AppBar>
    );
}

export default FooterComponent;