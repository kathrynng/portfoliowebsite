import React from 'react';
import { AppBar, Button, Toolbar } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import navbg from '../Extras/navbg.png';
import katlogo from '../Extras/katlogo.png';
import logoName from '../Extras/logoName.png';
import logoNamehov from '../Extras/logoNamehov.png';

import { NavLink } from 'react-router-dom';

import AboutMe from './SubMenu/AboutMe';
import Home from './SubMenu/Home';
import ExperienceSkills from './SubMenu/ExperienceSkills';
import Projects from './SubMenu/Projects';
import Resume from './SubMenu/Resume';

const useStyles = makeStyles((theme) => ({
    headerBackground: {
        display: 'inline-flex',
        backgroundColor: '#fff',
        backgroundImage: `url(${navbg})`,
        backgroundSize: '130px 130px',
        height: '130px',
        borderBottom:  '5px solid',
        color: theme.palette.primary.main,
        padding: '0 2em',
    },
    logo:{
        alignItems: 'center',
        display: 'inline-flex',
    },
    logoImg: {
        width: '130px',
        padding: theme.spacing(2),
    },
    logoNameImg: {
        padding: theme.spacing(3),
        position: 'relative',
    },
    logoNameHov: {
        position: 'absolute',
        opacity: 0,
        transition: 'opacity 0.2s ease-out',
        top: theme.spacing(3),
        left: theme.spacing(3),
        '&:hover': {
            opacity: 1,
        }
    },
    tabsStyle: {
        textcolor: theme.palette.primary.main,
        alignItems: 'center',
    },
    headerAlign: {
        display: 'inline-flex',
        flex: 5,
    },
    tabVisited: {
        textDecoration: 'none !important',
        color: theme.palette.primary.main,
        '&:hover': {
            backgroundColor: 'rgba(0,0,0,0)',
            color: `${theme.palette.secondary.main} !important`,
            transition: 'ease-in-out 0.3s',
            textShadow: `0 0 4px ${theme.palette.accent.main}`,
        },
    },
    tabSelected: {
        textDecoration: 'none !important',
        color:`${theme.palette.secondary.main} !important`,
        opacity: 1,
    },
    tab: {
        opacity: 0.8,
        padding: theme.spacing(2),
        transition: 'ease-in-out 0.2s',
        '&:hover': {
            backgroundColor: 'rgba(0,0,0,0)',
            color: `${theme.palette.secondary.main} !important`,
            transition: 'ease-in-out 0.3s',
            textShadow: `0 0 4px ${theme.palette.accent.main}`,
            cursor: 'pointer',
        },
    },
}));

const Main = () => {
    const classes = useStyles();

    return (
        <div>
        <AppBar className={classes.headerBackground} position='fixed'>
            <Toolbar>
            <div className={classes.headerAlign}>
                <NavLink to='/'>
                        <div className={classes.logo}>
                            <img src={katlogo} className={classes.logoImg} alt='logo'/>
                            <div className={classes.logoNameImg}>
                                <img src={logoName} className={classes.logoName} alt='Kathryn Ng'/>
                                <img src={logoNamehov} className={classes.logoNameHov} alt=''/>
                            </div>
                    </div>
                </NavLink>
            </div>
            <div className={classes.tabsStyle}>
                <Button disableRipple color='primary' className={classes.tab}>
                    <NavLink exact to='/about' activeClassName={classes.tabSelected} className={classes.tabVisited}>
                            about
                    </NavLink>
                </Button>
                <Button disableRipple color='primary' className={classes.tab}>
                    <NavLink exact to='/experienceskills' activeClassName={classes.tabSelected} className={classes.tabVisited}>
                        experience + skills
                    </NavLink>
                </Button>
                <Button disableRipple color='primary' className={classes.tab}>
                    <NavLink exact to='/projects' activeClassName={classes.tabSelected} className={classes.tabVisited}>
                        projects
                    </NavLink>
                </Button>
                <Button disableRipple color='primary' className={classes.tab}>
                    <NavLink exact to='/resume' activeClassName={classes.tabSelected} className={classes.tabVisited}>
                        résumé
                    </NavLink>
                </Button>
            </div>
            </Toolbar>
            {/* <Tabs variant='fullWidth' className={classes.tabsStyle} onChange={handleChange} value={value} TabIndicatorProps={{ style: { display: 'none' }}}> */}
                {/* <Tab disableRipple className={classes.tab} label='experiences + skills' {...tabPanelProps(2)} classes={{selected: classes.tabSelected}}/>
                <Tab disableRipple className={classes.tab} label='projects' {...tabPanelProps(3)} classes={{selected: classes.tabSelected}}/>
                <Tab disableRipple className={classes.tab} label='résumé' {...tabPanelProps(4)} classes={{selected: classes.tabSelected}}/> */}
            {/* </Tabs> */}
        </AppBar>
        
        </div>
    )
};

export default Main;

export { AboutMe, Home, ExperienceSkills, Projects, Resume };