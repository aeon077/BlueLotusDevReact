import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

import './App.scss';

//global component imports
import Main from './Main'
import Header from './Header';
import Footer from './Footer';

//page component imports
import NotFound from '../pages/404';
import About from '../pages/About';
import BlogPage from '../pages/Blog';
import Contact from '../pages/Contact';


const App = () => {

  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/about">
            <About />
          </Route>

          <Route exact path="/contact">
            <Contact />
          </Route>

          <Route exact path="/blog">
            <BlogPage />
          </Route>

          <Route exact path="/">
            <Main />
          </Route>

          {/* <Redirect >
            <NotFound />
          </Redirect> */}

        </Switch>
        <Footer />
      </Router>
    </>

  )
};

export default App;
