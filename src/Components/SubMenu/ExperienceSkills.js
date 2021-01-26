import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { Typography, Grid, GridList, GridListTile, Box, List, ListItem, ListItemIcon, ListItemText, Link, Accordion, AccordionSummary, AccordianDetails, AccordionDetails, Divider } from '@material-ui/core';
import DetailsIcon from '@material-ui/icons/Details';
import AddIcon from '@material-ui/icons/Add';

import StarIcon from '@material-ui/icons/Star';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import StarHalfIcon from '@material-ui/icons/StarHalf';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        paddingBottom: theme.spacing(3),
    },
    heading: {
        color: theme.palette.secondary.main,
        textAlign: 'center',
    },
    divider: {
        border: 0,
        borderTop: `1px solid ${theme.palette.info.main}`,
    },
    rightAlign:{
        textAlign: 'right',
    },
    accordionStyle: {
        backgroundColor: 'rgba(0,0,0,0)',
        padding: '0 auto',
        boxShadow: 'none',
        border:`1px solid ${theme.palette.info.main}`,
        '&:before': {
            display: 'none',
        },
    },
    accordionSummaryStyle: {
        '&$expanded': {
        margin: '0',
        marginBottom: -1,
        },
    },
    dropdownColor: {
        color: theme.palette.primary.main,
    },
    detailsList: {
        display: 'block',
    },
    secondaryHeading: {
        // color: theme.palette.accent.main,
        paddingTop: theme.spacing(1),
    },
    tertiaryHeading: {
        color: theme.palette.accent.main,
        paddingTop: theme.spacing(1),
    },
    skillListHeading: {
        color: theme.palette.secondary.main,
        paddingBottom: '0',
    },
    expBox: {
        display: 'block',
        margin: '0 auto',
    },
    workExpHeading: {
        display: 'block',
    },
    toolsList: {
        display: 'inline-flex',
        '&>li':{
            width: 'auto',
            paddingTop: '0',
            flexWrap: 'wrap',
        },
    },
    descList: {
        '&>li':{
            paddingTop: '0',
            paddingBottom: '0',
        },
    },
}));

const ExperienceSkills = () => {
    const classes = useStyles();
    const [expandedSkill, setExpandedSkill] = React.useState('skillsPanel')
    const [expandedExp, setExpandedExp] = React.useState('expPanel')

    const handleChangeExp = (panel) => (event, newExpanded) => {
        setExpandedExp(newExpanded ? panel : false);
    };

    const handleChangeSkills = (panel) => (event, newExpanded) => {
        setExpandedSkill(newExpanded ? panel : false);
    };

    return (
        <Grid className={classes.root}>
            <Grid container>
                <Grid md={4} xs={12}>
                <Typography className={classes.heading} variant='h1'>
                    Skills
                </Typography>
                <Box m={5} xs={12}>
                    <Accordion className={classes.accordionStyle} expanded={expandedSkill === 'skills1'} onChange={handleChangeSkills('skills1')}>
                        <AccordionSummary
                            className={classes.accordionSummaryStyle}
                            expandIcon={<DetailsIcon className={classes.dropdownColor}/>}
                            id='job1-info'
                            aria-controls='job1-info'
                        >
                            <Typography variant='h2'>
                                Development / Tech Skills
                            </Typography>
                        </AccordionSummary>
                        <AccordionDetails className={classes.detailsList}>
                        <List>
                        <ListItem className={classes.skillListHeading}>
                            <ListItemText primary='Language / Tool'/>
                            <ListItemText primary='Proficiency' className={classes.rightAlign}/>
                        </ListItem>
                        <ListItem>
                            <ListItemText primary='HTML5/CSS'/>
                            <ListItemIcon>
                                <StarIcon/>
                                <StarIcon/>
                                <StarIcon/>
                                <StarIcon/>
                                <StarHalfIcon/>
                            </ListItemIcon>
                        </ListItem>
                        <ListItem>
                            <ListItemText primary='Javascript'/>
                            <ListItemIcon>
                                <StarIcon/>
                                <StarIcon/>
                                <StarIcon/>
                                <StarIcon/>
                                <StarBorderIcon/>
                            </ListItemIcon>
                        </ListItem>
                        <ListItem>
                            <ListItemText primary='React'/>
                            <ListItemIcon>
                                <StarIcon/>
                                <StarIcon/>
                                <StarIcon/>
                                <StarBorderIcon/>
                                <StarBorderIcon/>
                            </ListItemIcon>
                        </ListItem>
                        <ListItem>
                            <ListItemText primary='MySQL'/>
                            <ListItemIcon>
                                <StarIcon/>
                                <StarIcon/>
                                <StarIcon/>
                                <StarHalfIcon/>
                                <StarBorderIcon/>
                            </ListItemIcon>
                        </ListItem>
                        <ListItem>
                            <ListItemText primary='PHP'/>
                            <ListItemIcon>
                                <StarIcon/>
                                <StarIcon/>
                                <StarIcon/>
                                <StarBorderIcon/>
                                <StarBorderIcon/>
                            </ListItemIcon>
                        </ListItem>
                        <Divider className={classes.divider}/>
                        <ListItem>
                            <ListItemText primary='Java'/>
                            <ListItemIcon>
                                <StarIcon/>
                                <StarIcon/>
                                <StarIcon/>
                                <StarIcon/>
                                <StarBorderIcon/>
                            </ListItemIcon>
                        </ListItem>
                        <ListItem>
                            <ListItemText primary='Python'/>
                            <ListItemIcon>
                                <StarIcon/>
                                <StarIcon/>
                                <StarHalfIcon/>
                                <StarBorderIcon/>
                                <StarBorderIcon/>
                            </ListItemIcon>
                        </ListItem>
                        <ListItem>
                            <ListItemText primary='C#'/>
                            <ListItemIcon>
                                <StarIcon/>
                                <StarIcon/>
                                <StarHalfIcon/>
                                <StarBorderIcon/>
                                <StarBorderIcon/>
                            </ListItemIcon>
                        </ListItem>
                        <Divider className={classes.divider}/>
                        <ListItem>
                            <ListItemText primary='Agile SDLC'/>
                            <ListItemIcon>
                                <StarIcon/>
                                <StarIcon/>
                                <StarIcon/>
                                <StarIcon/>
                                <StarIcon/>
                            </ListItemIcon>
                        </ListItem>
                        <Divider className={classes.divider}/>
                    </List>
                    <List className={classes.toolsList}>
                        <ListItem>
                            <ListItemText primary='Git'/>
                        </ListItem>
                        <ListItem>
                            <ListItemText primary='bash'/>
                        </ListItem>
                        <ListItem>
                            <ListItemText primary='Android Studio'/>
                        </ListItem>
                        <ListItem>
                            <ListItemText primary='Unity'/>
                        </ListItem>
                        <ListItem>
                            <ListItemText primary='Bootstrap'/>
                        </ListItem>
                        <ListItem>
                            <ListItemText primary='TravisCI'/>
                        </ListItem>
                    </List>
                    <List className={classes.toolsList}>
                        <ListItem>
                            <ListItemText primary='p5.js'/>
                        </ListItem>
                        <ListItem>
                            <ListItemText primary='NodeJS'/>
                        </ListItem>
                    </List>                            
                        </AccordionDetails>
                    </Accordion>
                </Box>
                <Box m={5} xs={12}>
                    <Accordion className={classes.accordionStyle} expanded={expandedSkill === 'skills2'} onChange={handleChangeSkills('skills2')}>
                        <AccordionSummary
                            className={classes.accordionSummaryStyle}
                            expandIcon={<DetailsIcon className={classes.dropdownColor}/>}
                            id='job1-info'
                            aria-controls='job1-info'
                        >
                            <Typography variant='h2'>
                             UI/UX Design Skills
                            </Typography>
                        </AccordionSummary>
                        <AccordionDetails className={classes.detailsList}>
                        <List>
                        <ListItem className={classes.skillListHeading}>
                            <ListItemText primary='Skill'/>
                            <ListItemText primary='Proficiency' className={classes.rightAlign}/>
                        </ListItem>
                        <ListItem>
                            <ListItemText primary='Prototyping'/>
                            <ListItemIcon>
                                <StarIcon/>
                                <StarIcon/>
                                <StarIcon/>
                                <StarIcon/>
                                <StarBorderIcon/>
                            </ListItemIcon>
                        </ListItem>
                        <ListItem>
                            <ListItemText primary='High Fidelity Design'/>
                            <ListItemIcon>
                                <StarIcon/>
                                <StarIcon/>
                                <StarIcon/>
                                <StarIcon/>
                                <StarBorderIcon/>
                            </ListItemIcon>
                        </ListItem>
                        <ListItem>
                            <ListItemText primary='User Research'/>
                            <ListItemIcon>
                                <StarIcon/>
                                <StarIcon/>
                                <StarIcon/>
                                <StarBorderIcon/>
                                <StarBorderIcon/>
                            </ListItemIcon>
                        </ListItem>
                        <ListItem>
                            <ListItemText primary='Wireframing'/>
                            <ListItemIcon>
                                <StarIcon/>
                                <StarIcon/>
                                <StarHalfIcon/>
                                <StarBorderIcon/>
                                <StarBorderIcon/>
                            </ListItemIcon>
                        </ListItem>
                        <ListItem>
                            <ListItemText primary='Storyboarding'/>
                            <ListItemIcon>
                                <StarIcon/>
                                <StarIcon/>
                                <StarHalfIcon/>
                                <StarBorderIcon/>
                                <StarBorderIcon/>
                            </ListItemIcon>
                        </ListItem>
                        <Divider className={classes.divider}/>
                    </List>
                    <List className={classes.toolsList}>
                        <ListItem>
                            <ListItemText primary='Figma'/>
                        </ListItem>
                        <ListItem>
                            <ListItemText primary='Adobe Photoshop'/>
                        </ListItem>
                        <ListItem>
                            <ListItemText primary='Adobe Illustrator'/>
                        </ListItem>
                        <ListItem>
                            <ListItemText primary='Adobe After Effects'/>
                        </ListItem>
                        <ListItem>
                            <ListItemText primary='Adobe InDesign, XD'/>
                        </ListItem>
                    </List>
                        </AccordionDetails>
                    </Accordion>
                </Box>
                </Grid>
                <Grid md={8} xs={12}>
                <Typography className={classes.heading} variant='h1'>
                    Experiences
                </Typography>
                <Box m={4} xs={12}>
                <Grid className={classes.expBox}>
                    <Grid>
                    <Typography variant='h2'>
                        Work
                    </Typography>
                    <Box m={1} />
                    <Accordion className={classes.accordionStyle} expanded={expandedExp === 'panel1'} onChange={handleChangeExp('panel1')}>
                        <AccordionSummary
                            className={classes.accordionSummaryStyle}
                            expandIcon={<DetailsIcon className={classes.dropdownColor}/>}
                            id='job1-info'
                            aria-controls='job1-info'
                        >
                            <Box className={classes.workExpHeading}>
                            <Typography variant='h3' color='secondary'>
                                Co-op Software Developer
                            </Typography>
                            <Typography variant='body1' className={classes.secondaryHeading}>
                                @ FreshGrade Education Inc. (Vancouver, BC)
                            </Typography>
                            <Typography variant='body1' className={classes.tertiaryHeading}>
                                September 2020 to Present
                            </Typography>
                            </Box>
                        </AccordionSummary>
                        <AccordionDetails className={classes.detailsList}>
                            <Grid>
                            <Typography variant='body1' color='secondary'>
                                Tools used:
                            </Typography>
                               <List className={classes.toolsList}>
                                   <ListItem>
                                       <ListItemText primary='TypeScript'/>
                                   </ListItem>
                                   <ListItem>
                                       <ListItemText primary='React'/>
                                   </ListItem>
                                   <ListItem>
                                       <ListItemText primary='C#'/>
                                   </ListItem>
                                   <ListItem>
                                       <ListItemText primary='.NET'/>
                                   </ListItem>
                                   <ListItem>
                                       <ListItemText primary='Cordova'/>
                                   </ListItem>
                               </List>
                            </Grid>
                            <Box m={1}/>
                            <Grid>
                            <Typography variant='body1' color='secondary'>
                                Position details:
                            </Typography>
                               <List className={classes.descList}>
                                   <ListItem>
                                        <ListItemIcon>
                                           <AddIcon />
                                       </ListItemIcon>
                                       <ListItemText primary='Developed new features and wrote tests for each new client-side feature implemented using TypeScript, increased interest and new user sign ups on the software by 15% compared to the year before.'/>
                                   </ListItem>
                                   <ListItem>
                                        <ListItemIcon>
                                           <AddIcon />
                                       </ListItemIcon>
                                       <ListItemText primary='Developed mobile features using React, TypeScript and Cordova for mobile development, testing and deployment.'/>
                                   </ListItem>
                                   <ListItem>
                                        <ListItemIcon>
                                           <AddIcon />
                                       </ListItemIcon>
                                       <ListItemText primary='Built functions and tests in C# on the .NET server to accompany client-side modifications.'/>
                                   </ListItem>
                                   <ListItem>
                                        <ListItemIcon>
                                           <AddIcon />
                                       </ListItemIcon>
                                       <ListItemText primary='Fixed bugs and performed hotfixes that were logged during the development or after each release update, improving 30-day user retention by 4% as well as user-experience.'/>
                                   </ListItem>
                                   <ListItem>
                                        <ListItemIcon>
                                           <AddIcon />
                                       </ListItemIcon>
                                       <ListItemText primary='Reviewed and tested colleagues’ code through GitHub, provided feedback and improvement or when outcome did not work as intended, decreasing user testing time by 5%.'/>
                                   </ListItem>
                               </List>
                            </Grid>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion className={classes.accordionStyle} expanded={expandedExp === 'panel2'} onChange={handleChangeExp('panel2')}>
                        <AccordionSummary
                            className={classes.accordionSummaryStyle}
                            expandIcon={<DetailsIcon className={classes.dropdownColor}/>}
                            id='job1-info'
                            aria-controls='job1-info'
                        >
                            <Box className={classes.workExpHeading}>
                            <Typography variant='h3' color='secondary'>
                                Technology Intern
                            </Typography>
                            <Typography variant='body1' className={classes.secondaryHeading}>
                                @ APD Group Sdn Bhd. (Mont Kiara, Malaysia)
                            </Typography>
                            <Typography variant='body1' className={classes.tertiaryHeading}>
                               May to June 2018
                            </Typography>
                            </Box>
                        </AccordionSummary>
                        <AccordionDetails className={classes.detailsList}>
                            <Grid>
                            <Typography variant='body1' color='secondary'>
                                Tools used:
                            </Typography>
                               <List className={classes.toolsList}>
                                   <ListItem>
                                       <ListItemText primary='HTML5/CSS'/>
                                   </ListItem>
                                   <ListItem>
                                       <ListItemText primary='Bootstrap'/>
                                   </ListItem>
                                   <ListItem>
                                       <ListItemText primary='Spring'/>
                                   </ListItem>
                                   <ListItem>
                                       <ListItemText primary='Adobe AEM'/>
                                   </ListItem>
                               </List>
                            </Grid>
                            <Box m={1}/>
                            <Grid>
                            <Typography variant='body1' color='secondary'>
                                Position details:
                            </Typography>
                               <List className={classes.descList}>
                                   <ListItem>
                                        <ListItemIcon>
                                           <AddIcon />
                                       </ListItemIcon>
                                       <ListItemText primary='Co-developed a webpage for a client’s event in 2 days using HTML and CSS frameworks such as Bootstrap and JS libraries like Waypoints, had more than 2000 attendees on the day of the event.'/>
                                   </ListItem>
                                   <ListItem>
                                        <ListItemIcon>
                                           <AddIcon />
                                       </ListItemIcon>
                                       <ListItemText primary='Updated webpages and assets for a client’s webpage using HTML and Bootstrap components on Adobe AEM, improving web site visits by 10%.'/>
                                   </ListItem>
                                   <ListItem>
                                        <ListItemIcon>
                                           <AddIcon />
                                       </ListItemIcon>
                                       <ListItemText primary='Implemented RESTful APIs using Spring Framework to optimize requests and responses made on a client’s site.'/>
                                   </ListItem>
                                   <ListItem>
                                        <ListItemIcon>
                                           <AddIcon />
                                       </ListItemIcon>
                                       <ListItemText primary='Developed device responsive infographics on client’s website, using CSS and client-provided designs.'/>
                                   </ListItem>
                               </List>
                            </Grid>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion className={classes.accordionStyle} expanded={expandedExp === 'panel3'} onChange={handleChangeExp('panel3')}>
                        <AccordionSummary
                            className={classes.accordionSummaryStyle}
                            expandIcon={<DetailsIcon className={classes.dropdownColor}/>}
                            id='job1-info'
                            aria-controls='job1-info'
                        >
                            <Box className={classes.workExpHeading}>
                            <Typography variant='h3' color='secondary'>
                                Undergraduate Teaching Assistant and Coordinator
                            </Typography>
                            <Typography variant='body1' className={classes.secondaryHeading}>
                                @ University of British Columbia, Okanagan Campus (Kelowna, BC)
                            </Typography>
                            <Typography variant='body1' className={classes.tertiaryHeading}>
                               January 2019 - April 2019, January 2020 - April 2020
                            </Typography>
                            </Box>
                        </AccordionSummary>
                        <AccordionDetails className={classes.detailsList}>
                            <Grid>
                            <Typography variant='body1' color='secondary'>
                                Position details:
                            </Typography>
                               <List className={classes.descList}>
                                   <ListItem>
                                        <ListItemIcon>
                                           <AddIcon />
                                       </ListItemIcon>
                                       <ListItemText primary='Coordinated and managed 2 hour labs for a lower level Computer Science course.'/>
                                   </ListItem>
                                   <ListItem>
                                        <ListItemIcon>
                                           <AddIcon />
                                       </ListItemIcon>
                                       <ListItemText primary='Ensuring and reminding other teaching assistants to hand in grades on time, and planning availability to mark midterms.'/>
                                   </ListItem>
                                   <ListItem>
                                        <ListItemIcon>
                                           <AddIcon />
                                       </ListItemIcon>
                                       <ListItemText primary='Checking students plagiarism rate, and writing reports to the professor when code plagiarism is found.'/>
                                   </ListItem>
                               </List>
                            </Grid>
                        </AccordionDetails>
                    </Accordion>
                    </Grid>
                    <Box m={2}/>
                    <Grid>
                    <Typography variant='h2'>
                        School Clubs
                    </Typography>
                    <Box m={1}/>
                    <Grid xs={12}>
                    <Accordion className={classes.accordionStyle} expanded={expandedExp === 'panel4'} onChange={handleChangeExp('panel4')}>
                        <AccordionSummary
                            className={classes.accordionSummaryStyle}
                            expandIcon={<DetailsIcon className={classes.dropdownColor}/>}
                            id='job1-info'
                            aria-controls='job1-info'
                        >
                            <Box className={classes.workExpHeading}>
                            <Typography variant='h3' color='secondary'>
                                Creative Director, Front-End Developer
                            </Typography>
                            <Typography variant='body1' className={classes.secondaryHeading}>
                                @ UBCO Computer Science Course Union (Kelowna, BC)
                            </Typography>
                            <Typography variant='body1' className={classes.tertiaryHeading}>
                               January 2019 to May 2020
                            </Typography>
                            </Box>
                        </AccordionSummary>
                        <AccordionDetails className={classes.detailsList}>
                            <Grid>
                            <Typography variant='body1' color='secondary'>
                                BCHacks is UBC Okanagan's first hackathon hosted by the UBCO Computer Science Course Union, on January 17 to 18, 2020.
                            </Typography>
                            <Box m={1}/>
                            <Typography variant='body1' color='secondary'>
                                Position details:
                            </Typography>
                               <List className={classes.descList}>
                                   <ListItem>
                                       <ListItemIcon>
                                           <AddIcon />
                                       </ListItemIcon>
                                       <ListItemText primary='Brainstormed and designed the BCHacks logo, used for the event and other promotional materials done for the club.'/>
                                   </ListItem>
                                   <ListItem>
                                       <ListItemIcon>
                                           <AddIcon />
                                       </ListItemIcon>
                                       <ListItemText primary='Designed and illustrated all assets used on the BCHacks website, marketing materials and in using Adobe Illustrator and Adobe Photoshop.'/>
                                   </ListItem>
                                   <ListItem>
                                       <ListItemIcon>
                                           <AddIcon />
                                       </ListItemIcon>
                                       <ListItemText primary='Prototyped and delivered a fully coded website in Figma then in HTML, CSS and JS in 3 months to raise $18,500 for BCHacks, a Major League Hacking (MLH) certified hackathon.'/>
                                   </ListItem>
                               </List>
                            </Grid>
                            <Typography variant='body1' color='secondary'>
                                View 'BCHacks In the Making' on my Behance <Link href="https://www.behance.net/gallery/84671867/BCHacks-In-the-Making" target="_blank">here</Link>!
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion className={classes.accordionStyle} expanded={expandedExp === 'panel5'} onChange={handleChangeExp('panel5')}>
                        <AccordionSummary
                            className={classes.accordionSummaryStyle}
                            expandIcon={<DetailsIcon className={classes.dropdownColor}/>}
                            id='job1-info'
                            aria-controls='job1-info'
                        >
                            <Box className={classes.workExpHeading}>
                            <Typography variant='h3' color='secondary'>
                                Creative Director, Co-Event Organizer
                            </Typography>
                            <Typography variant='body1' className={classes.secondaryHeading}>
                                @ UBCO Girls in Tech, an ACM-W Student Chapter (Kelowna, BC)
                            </Typography>
                            <Typography variant='body1' className={classes.tertiaryHeading}>
                               May 2019 to May 2020
                            </Typography>
                            </Box>
                        </AccordionSummary>
                        <AccordionDetails className={classes.detailsList}>
                            <Grid>
                            <Typography variant='body1' color='secondary'>
                                A student chapter of the Association for Computing Machinery's Council on Women in Computing (ACM-W), located at UBCO. View more information about UBCO GIT <Link href='http://ubcogirlsintech.acm.org/' target='_blank'>here</Link>.
                            </Typography>
                            <Box m={1}/>
                            <Typography variant='body1' color='secondary'>
                                Position details:
                            </Typography>
                               <List className={classes.descList}>
                                   <ListItem>
                                       <ListItemIcon>
                                           <AddIcon />
                                       </ListItemIcon>
                                       <ListItemText primary='Designed GiT logo, marketing materials for club event, influencing students across campus to gain interest in the club.'/>
                                   </ListItem>
                                   <ListItem>
                                       <ListItemIcon>
                                           <AddIcon />
                                       </ListItemIcon>
                                       <ListItemText primary='Designed and developed a website using HTML and CSS to showcase different resources offered by the organization and its its parent organization, ACM-W.'/>
                                   </ListItem>
                                   <ListItem>
                                       <ListItemIcon>
                                           <AddIcon />
                                       </ListItemIcon>
                                       <ListItemText primary='Planned, designed marketing materials and coordinated a large scale event on Women in Technology, which unfortunately got postponed indefinitely due to COVID-19.'/>
                                   </ListItem>
                               </List>
                            </Grid>
                        </AccordionDetails>
                    </Accordion>
                <Box m={2} />
                    </Grid>
                    </Grid>
                </Grid>
                </Box>
                </Grid>
            </Grid>
        </Grid>
    )
};

export default ExperienceSkills;