import React from 'react';

import { Typography, Grid, Box, Link, GridList, GridListTile, Card, CardContent, CardMedia, CardActionArea, CardActions, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

import hanami from '../../Extras/Projects/hanami.png';
import stoparty from '../../Extras/Projects/stpart.png';
import sink from '../../Extras/Projects/sink.PNG';
import qbakery from '../../Extras/Projects/qbakery.png';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        paddingBottom: theme.spacing(3),
    },
    heading: {
        color: theme.palette.secondary.main,
        textAlign: 'center',
    },
    cards: {
        marginTop: `${theme.spacing(4)} !important`,
        '&>li': {
            height: 'auto !important',
        }
    },
    projArea: {
       textAlign: 'center',
    },
    media: {
        height: '150px',
        margin: theme.spacing(2),
    },
    cardCenter: {
        justifyContent: 'center',
    },
    cardInfo: {
        marginTop: theme.spacing(1),
    },
    cardLink: {
        margin: `0 ${theme.spacing(2)}px`,
        '&:hover': {
            textDecoration: 'none',
        },
    },
}));

const Projects = () => {
    const classes = useStyles();

    const projectInfo = [
        {
            img: hanami,
            title: 'Hanami Urself',
            info: "Hanami means 'Flower Watching', and in spirit of social distancing due to the COVID-19 pandemic, I made a cherry blossom falling simulator. Upload a photo and see the magic happen!",
            tool: 'p5.js',
            link: 'http://hanami.kathrynng.com/',
            ghlink: 'https://github.com/kathrynng/hanamiUrself',
        },
        {
            img: stoparty,
            title: 'Stomach Party',
            info: "When I ate out with my friends, they would eat more desserts even though they were full after eating savory food. I was interested in 'mathing' it out how food is 'partitioned', so I made this fun app, enjoy!",
            tool: 'React',
            link: 'https://stomachparty.kathrynng.com/',
            ghlink: 'https://github.com/kathrynng/stomachpartitioning',
        },
        {
            img: sink,
            title: 'Sink',
            info: "Sink is an interactive gallery piece developed for a upper year Media Studies class. I worked on the Arduino components, combining with MaxMSP to create sounds when interacted with.",
            tool: 'MaxMSP and C++ (Arduino)',
            link: 'http://sink.kathrynng.com/',
            // ghlink: 'https://github.com/kathrynng/stomachpartitioning',
        },
        {
            img: qbakery,
            title: 'Quantomoku Bakery',
            info: "Quantomoku Bakery was made in nwHacks 2020. I was in charge of developing the core design and theme, as well as helping out with front-end isses with CSS.",
            tool: 'CSS and Vue.js',
            link: 'https://devpost.com/software/quantomoku',
            ghlink: 'https://github.com/IvanIsCoding/Quantomoku',
        },
    ]

    return (
        <Grid className={classes.root}>
            <Typography variant='h1' className={classes.heading}>Projects</Typography>
            <Box m={4} className={classes.projArea}>
            <Box m={2}/>
                <Typography variant='h2'>
                    Viewable Development projects
                </Typography>
            <GridList cols={4} className={classes.cards} spacing={25}>
                {projectInfo.map((card) => (
                    <GridListTile>
                        <Card>
                            <CardActionArea>
                                <CardMedia
                                    className={classes.media}
                                    image={card.img}
                                    title={card.title}
                                />
                                <CardContent>
                                    <Typography variant='h3'>
                                        {card.title}
                                    </Typography>
                                    <Typography variant='body1' className={classes.cardInfo}>
                                        {card.info}
                                    </Typography>
                                    <Typography variant='body1' color='secondary' className={classes.cardInfo}>
                                        Made with {card.tool}
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                            <CardActions className={classes.cardCenter}>
                            <Button size='small' color='primary'>
                                <Link href={card.link} target='_blank' className={classes.cardLink}>
                                    View the project here!
                                </Link>
                            </Button>
                            {!!card.ghlink ? 
                                (<Button size='small' color='secondary'>
                                <Link href={card.ghlink} target='_blank' className={classes.cardLink}>
                                    Github Repo
                                </Link>
                                </Button>) : ''
                            }
                            </CardActions>
                        </Card>
                    </GridListTile>
                ))}
            </GridList>
            </Box>
        </Grid>
    )
};

export default Projects;