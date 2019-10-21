import React, { Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css';
import Navbar from './components/layout/Navbar';
import Index from './components/layout/Index';

const App = () => {
  return (
    <Router>
      <Fragment>
        <Navbar />
        <div className='container'>
          <Switch>
            <Route exact path='/' component={Index}/>
          </Switch>
        </div>
      </Fragment>
    </Router>
  );
}

export default App;
