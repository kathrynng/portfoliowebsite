import React from 'react';
import { ThemeProvider } from '@material-ui/core';
import Main, { AboutMe, Home, ExperienceSkills, Projects, Resume } from './Components/Main.js';
import CssBaseline from '@material-ui/core/CssBaseline';
import theme  from './Components/theme';

import InfoArea  from './Components/InfoArea';
import ContactSocials from './Components/SubMenu/ContactSocials';
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <div className="App">
          <Main/>
          <InfoArea>
            <Switch>
              <Route exact path="/" component={Home}/>
              <Route path="/about" component={AboutMe}/>
              <Route path="/experienceskills" component={ExperienceSkills}/>
              <Route path="/projects" component={Projects}/>
              <Route path="/resume" component={Resume}/>
              <Route render={() => <Redirect to="/" />} />
            </Switch>
          </InfoArea>
        </div>
        </Router>
        <ContactSocials />
    </ThemeProvider>
  );
};

export default App;
