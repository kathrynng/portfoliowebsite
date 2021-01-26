import React from 'react';
import { Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        marginTop: '145px',
    }
}));

const InfoArea = (props) => {
    const { children, value, index, ...other } = props;

    const classes = useStyles();
    
    return (
        <div 
            role='InfoArea' 
            id={`info-${index}`}
            aria-labelledby={`info-${index}`}
        >
                <Box className={classes.root} p={4}>
                    {children}
                </Box>
        </div>
    );
};

export default InfoArea;
