import React from 'react';
import './App2.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ScrollToTop from './ScrollToTop';
import Header2 from './Header2';
import Main from './Main';


function App2() {
    return (
        <div>
            <Router>
                <ScrollToTop />
                <header><Header2 id='header' /></header>
                <Switch>
                    <Route path="/">
                        <Main />
                    </Route>
                </Switch>
                
            </Router>
        </div>
    )
}

export default App2
