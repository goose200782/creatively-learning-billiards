import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import TodoOrig from './TodoOrig';
import './App.css';
import Header from './Header';
import Main from './Main';
import Contact from './Contact';
import GetQuote from './GetQuote';
import Services from './Services';
import Footer from './Footer';
import ScrollToTop from './ScrollToTop';
import AboutUs from './AboutUs';
import Book from './Book';
import League from './League';

function App() {
  

  return (
    <div className="App justifyCenter flexCol alignCenter paddingBottom50vh">
      <Router>
            <ScrollToTop />
            <header><Header /></header>
            <Switch id='content-wrap'>
              <Route path="/league">
                <League />
              </Route>
              <Route path="/book">
                <Book />
              </Route>
              <Route path="/aboutUs">
                <AboutUs />
              </Route>
              <Route path="/services">
                <Services />
              </Route>
              <Route path="/quote">
                <GetQuote />
              </Route>
              <Route path="/contact">
                <Contact />
              </Route>
              <Route path="/">
                <Main />
              </Route>
            </Switch>
          {/* </div> */}
          <Footer />
        {/* </div> */}
        
      </Router>
      
        
      
      {/* <TodoOrig /> */}
    </div>
  );
}

export default App;
