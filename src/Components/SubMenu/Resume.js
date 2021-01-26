import React from 'react';
import FileViewer from 'react-file-viewer';
import { Typography, Grid, Box, Link } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import resume from '../../Extras/Kathryn_Ng_Resume.pdf';


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    heading: {
        color: theme.palette.secondary.main,
        textAlign: 'center',
    },
    pdfArea: {
       textAlign: 'center',
       paddingBottom: theme.spacing(3),
    },
}));

const Resume = () => {
    const classes = useStyles();

    const onError = () => {
        return (
            <Typography variant='h2'>Oh no! An error occured while loading the file. Please check back later. </Typography>
        );
    };

    return (
        <Grid className={classes.root}>
            <Typography variant='h1' className={classes.heading}>Resume</Typography>
            <Box m={4} className={classes.pdfArea}>
            <Box m={2}/>
            <Grid>
                <FileViewer fileType='pdf' filePath={resume} onError={onError} allowFullScreen/>
            </Grid>
            <Box m={2}/>
            <Grid>
                <Typography variant='h3'>
                    <Link href={resume} download>Download my resume as pdf!</Link>
                </Typography>
            </Grid>
            </Box>
        </Grid>
    );
};

export default Resume;