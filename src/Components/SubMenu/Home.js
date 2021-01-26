import React from 'react';
import { Typography, Grid, GridList, GridListTile, Box, List, ListItem, ListItemIcon, ListItemText, Link } from '@material-ui/core';
import Self from '../../Extras/self.png';
import { makeStyles } from '@material-ui/styles';

import StarIcon from '@material-ui/icons/Star';
import StarBorderIcon from '@material-ui/icons/StarBorder';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    centered:{
        justifyContent: 'center',
    },
    heading: {
        color: theme.palette.secondary.main,
        textAlign: 'center'
    },
    quik: {
        borderTop: `1px solid ${theme.palette.info.main}`,
        borderBottom: `1px solid ${theme.palette.info.main}`,
    },
    quikinfo: {
        textAlign: 'left',
        padding: theme.spacing(4),
    },
    img: {
        width: '100%',
    },
    listItem: {
        textDecoration: 'none',
        display: 'inline-flex',
        alignItems: 'center',
        '&:hover': {        
            textDecoration: 'none',
        }
    },
    listPortfolios: {
        color: theme.palette.secondary.main,
        display: 'inline-block',
    },
    listJobs: {
        color: theme.palette.primary.main,
        display: 'inline-block',
    },
    listItemNoPadding: {
        padding: '0px !important',
    },
    skillsList: {
        display: 'flex',
    }
}));

const Home = () => {
    const classes = useStyles();

    return (
        <Grid className={classes.root}>
            <Typography variant='h3' className={classes.heading}>
                Kathryn is a software developer, time to time graphic designer and budding UI/UX developer.
            </Typography>
            <Box m={2}/>
            <Typography variant='h2' className={classes.heading}>
                Currently looking for SWE or UI/UX Summer 2021 internships!
            </Typography>
            <Box className={classes.quik} m={4} p={5}>
            <Typography variant='h2' className={classes.heading}>
                Quick Info
            </Typography>
                <Grid container className={classes.centered}>
                    <Grid item md={3} xs={12}>
                        <img src={Self} className={classes.img}/>
                    </Grid>
                    <Grid item md={6} xs={12} className={classes.quikinfo}>
                        <Typography variant='h2'>
                            Kathryn Ng
                        </Typography>
                        <Box m={1}/>
                        <List className={classes.listStyle}>
                            <ListItem button className={classes.listItemNoPadding}>
                                <Link className={classes.listItem} href='https://freshgrade.com/' target='_blank'>
                                <ListItemIcon>
                                    <StarIcon color='primary'/>
                                </ListItemIcon>
                                <ListItemText className={classes.listJobs} primary='Co-op Software Developer at FreshGrade Education Inc.' secondary='September 2020 to Present'/>
                                </Link>
                            </ListItem>
                            <ListItem className={classes.listItemNoPadding}>
                                <Link className={classes.listItem}>
                                <ListItemIcon>
                                    <StarBorderIcon color='primary'/>
                                </ListItemIcon>
                                <ListItemText className={classes.listJobs} primary='Bachelor of Arts, Computer Science ' secondary='University of British Columbia (UBC), Okanagan Campus. Sept 2017 to April 2022'/>
                                </Link>
                            </ListItem>
                        </List>
                        <Typography variant='h3'>
                            Favorite Projects
                        </Typography>
                        <List className={classes.listStyle}>
                            <ListItem button className={classes.listItemNoPadding}>
                                <Link className={classes.listItem} href='https://stomachparty.kathrynng.com/' target='_blank'>
                                <ListItemIcon>
                                    <StarIcon color='primary'/>
                                </ListItemIcon>
                                <ListItemText className={classes.listJobs} primary='Stomach Party' secondary='Personal project - Dev (made with React)'/>
                                </Link>
                            </ListItem>
                            <ListItem button className={classes.listItemNoPadding}>
                                <Link className={classes.listItem} href='https://www.behance.net/gallery/91501703/Linkdr' target='_blank'>
                                <ListItemIcon>
                                    <StarIcon color='primary'/>
                                </ListItemIcon>
                                <ListItemText className={classes.listJobs} primary='Linkdr' secondary='Personal project - UI/UX'/>
                                </Link>
                            </ListItem>
                            <ListItem button className={classes.listItemNoPadding}>
                                <Link className={classes.listItem} href='https://devpost.com/software/quantomoku' target='_blank'>
                                <ListItemIcon>
                                    <StarBorderIcon color='primary'/>
                                </ListItemIcon>
                                <ListItemText className={classes.listJobs} primary='Quantomoku Bakery' secondary='Hackathon - nwHacks 2020'/>
                                </Link>
                            </ListItem>
                            {/* <ListItem button>
                                <Link className={classes.listItem} href='https://devpost.com/software/safetybit' target='_blank'>
                                <ListItemIcon>
                                    <StarIcon color='primary'/>
                                </ListItemIcon>
                                <ListItemText className={classes.listJobs} primary='SafetyBit' secondary='Hackathon - cmd-f 2019'/>
                                </Link>
                            </ListItem> */}
                        </List>
                        <Typography variant='h3'>
                            Skills
                        </Typography>
                        <GridList cols={3} className={classes.skillsList}>
                        <GridListTile>
                            <List className={classes.listStyle}>
                                <ListItem className={classes.listItemNoPadding}>
                                    <ListItemIcon>
                                        <StarIcon color='secondary'/>
                                    </ListItemIcon>
                                    <ListItemText className={classes.listPortfolios} primary='React' secondary='competent'/>
                                </ListItem>
                                <ListItem className={classes.listItemNoPadding}>
                                    <ListItemIcon>
                                        <StarIcon color='secondary'/>
                                    </ListItemIcon>
                                    <ListItemText className={classes.listPortfolios} primary='Javascript' secondary='proficient'/>
                                </ListItem>
                                <ListItem className={classes.listItemNoPadding}>
                                    <ListItemIcon>
                                        <StarIcon color='secondary'/>
                                    </ListItemIcon>
                                    <ListItemText className={classes.listPortfolios} primary='HTML5/CSS' secondary='proficient'/>
                                </ListItem>
                                {/* <ListItem button>
                                    <Link className={classes.listItem} href='https://www.behance.net/kathrynngui' target='_blank'>
                                    <ListItemIcon>
                                    <StarIcon color='secondary'/>
                                    </ListItemIcon>
                                    <ListItemText className={classes.listPortfolios} primary='UI and Graphic Design Portfolio' />
                                    </Link>
                                    </ListItem>
                                    <ListItem button>
                                    <Link className={classes.listItem} href='https://github.com/kathrynng' target='_blank'>
                                    <ListItemIcon>
                                    <StarIcon color='secondary'/>
                                    </ListItemIcon>
                                    <ListItemText className={classes.listPortfolios} primary='Github' />
                                    </Link>
                                </ListItem> */}
                        </List>
                        </GridListTile>
                        <GridListTile>
                        <List className={classes.listStyle}>
                            <ListItem className={classes.listItemNoPadding}>
                                <ListItemIcon>
                                    <StarIcon color='secondary'/>
                                </ListItemIcon>
                                <ListItemText className={classes.listPortfolios} primary='Java' secondary='proficient'/>
                            </ListItem>
                            <ListItem className={classes.listItemNoPadding}>
                                <ListItemIcon>
                                    <StarIcon color='secondary'/>
                                </ListItemIcon>
                                <ListItemText className={classes.listPortfolios} primary='C#' secondary='novice'/>
                            </ListItem>
                            <ListItem className={classes.listItemNoPadding}>
                                <ListItemIcon>
                                    <StarIcon color='secondary'/>
                                </ListItemIcon>
                                <ListItemText className={classes.listPortfolios} primary='Python' secondary='novice'/>
                            </ListItem>
                        </List>
                        </GridListTile>
                        <GridListTile>
                        <List className={classes.listStyle}>
                            <ListItem className={classes.listItemNoPadding}>
                                <ListItemIcon>
                                    <StarBorderIcon color='secondary'/>
                                </ListItemIcon>
                                <ListItemText className={classes.listPortfolios} primary='User Research' secondary='competent'/>
                            </ListItem>
                            <ListItem className={classes.listItemNoPadding}>
                                <ListItemIcon>
                                    <StarBorderIcon color='secondary'/>
                                </ListItemIcon>
                                <ListItemText className={classes.listPortfolios} primary='Wireframing' secondary='novice'/>
                            </ListItem>
                            <ListItem className={classes.listItemNoPadding}>
                                <ListItemIcon>
                                    <StarBorderIcon color='secondary'/>
                                </ListItemIcon>
                                <ListItemText className={classes.listPortfolios} primary='Storyboarding' secondary='novice'/>
                            </ListItem>
                        </List>
                        </GridListTile>
                        </GridList>
                    </Grid>
                </Grid>
            </Box>
        </Grid>
    )
};

export default Home;