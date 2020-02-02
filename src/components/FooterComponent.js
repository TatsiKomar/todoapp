import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';

function FooterComponent() {
    return (
        <AppBar position='fixed'
                style={{
                    top: 'auto',
                    bottom: 0,
                    height: '50px'
                }}
        >
            <Toolbar >

                <div style={{
                    width: '450px',
                    margin: '30px auto',
                    }}
                >
                    <Typography variant="h5">
                            @2020 Tatiana Komar All Rights Reserved
                    </Typography>
                </div>


               


            </Toolbar>
            
        
        </AppBar>

    );
}



export default FooterComponent;