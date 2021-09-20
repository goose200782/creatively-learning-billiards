import React from 'react';
import './App2.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ScrollToTop from './ScrollToTop';
import Header2 from './Header2';


function App2() {
    return (
        <div>
            <Router>
                <ScrollToTop />
                <Header2 />
                <Switch>
                    <Route path="/">
                        
                    </Route>
                </Switch>
                
            </Router>
        </div>
    )
}

export default App2
