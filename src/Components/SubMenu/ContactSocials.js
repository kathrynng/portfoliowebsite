import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { Toolbar, IconButton, AppBar  } from '@material-ui/core';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import EmailIcon from '@material-ui/icons/Email';
import BrushIcon from '@material-ui/icons/Brush';
import BehanceIcon from '../../Extras/behance.png';

const useStyles = makeStyles((theme) => ({
    box: {
        display: 'flex',
        justifyContent: 'center',
    },
    appBar: {
        top: 'auto',
        bottom: 0,
        backgroundColor: '#fff',
      },
}));

const ContactSocials = () => {
    const classes = useStyles();

    return (
        <AppBar className={classes.appBar}>
            <Toolbar className={classes.box}>
                <IconButton color='primary' target='_blank' aria-label='linked-in' href='https://www.linkedin.com/in/kathryn-ngsy/'>
                    <LinkedInIcon />
                </IconButton>
                <IconButton color='primary' target='_blank' aria-label='github' href='https://github.com/kathrynng'>
                    <GitHubIcon />
                </IconButton>
                <IconButton color='primary' target='_blank' aria-label='linked-in' href='mailto:kathrynng.design@gmail.com'>
                    <EmailIcon />
                </IconButton>
                <IconButton color='primary' target='_blank' aria-label='github' href='https://www.behance.net/kathrynngui'>
                    <img src={BehanceIcon} alt='' width='30px'/>
                </IconButton>
                <IconButton color='primary' target='_blank' aria-label='github' href='https://www.behance.net/kathrynngsy'>
                    <BrushIcon />
                </IconButton>
            </Toolbar>
        </AppBar>
    );
};

export default ContactSocials;