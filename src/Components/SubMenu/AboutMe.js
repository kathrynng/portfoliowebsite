import React from 'react';
import { makeStyles } from '@material-ui/styles';
import AboutMeImg from '../../Extras/AboutMe.png';
import { Typography, Grid, Box, Button } from '@material-ui/core';
import theme from '../theme';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    heading: {
        color: theme.palette.secondary.main,
        textAlign: 'center',
    },
    about: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    name: {
        display: 'inline-flex',
        alignItems: 'baseline',
        color: theme.palette.primary.main,
    },
    contactBtn: {
        color: theme.palette.secondary.main,
        border: '1px solid',
        borderRadius: '5rem',
        borderColor: theme.palette.secondary.main,
        padding: '0.5em 1em',
        '&:hover': {
            color: theme.palette.primary.main,
            borderColor: theme.palette.primary.main,
            backgroundColor: '#F9E8E5',
            boxShadow: "0px 3px 1px -2px rgba(0,0,0,0.2),0px 2px 2px 0px rgba(0,0,0,0.14),0px 1px 5px 0px rgba(0,0,0,0.12)",
        }
    },
}));

const AboutMe = () => {
    const classes = useStyles();

    return (
            <Grid className={classes.root}>
                <Typography variant='h2' className={classes.heading}>Why, Hello there!</Typography>
                <Typography variant='h1' className={classes.heading}>About me:</Typography>
                <Grid className={classes.about} container>
                    <Grid md={4} xs={12}>
                        <img src={AboutMeImg} alt='me'/>
                    </Grid>
                    <Grid item md={5} xs={12}>
                        <Box className={classes.name}>
                            <Typography variant='h1'>
                                Kathryn Ng
                            </Typography>
                            <Typography variant='h2' style={{margin: '0 0.5em', color: theme.palette.secondary.main}}>
                                /ɛŋ/
                            </Typography>
                        </Box>
                        <Box m={4}/>
                        <Typography variant='body1'>
                            I’m a 4th year student at the <b>University of British Columbia</b>, Okanagan Campus, and will be graduating in Spring 2022.
                        </Typography>
                        <Box m={1}/>
                        <Typography variant='body1'>
                            I was born and raised in Malaysia, and am currently residing in Vancouver, BC. My interests fall in design and development, and I’m always wanting to learn how to create improvements in every aspect of life!
                        </Typography>
                        <Box m={1}/>
                        <Typography variant='body1'>
                            Education is important, and being able to contribute to build interesting ways for the growing generations to learn is valuable to me. Most of my projects lean towards fun, with some kind of practical use. When I'm not grinding my brain at work, I like playing video games and drawing!
                        </Typography>
                        <Box m={3}/>
                        <Button href='mailto:kathrynng.design@gmail.com' className={classes.contactBtn}>
                            contact me!
                        </Button>
                        <Box m={1}/>
                        <Typography variant='body1' color='secondary'>
                            or check my other links below:
                        </Typography>
                    </Grid>
                </Grid>
            </Grid>
    )
};
 
export default AboutMe;