import React, { Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css';
import Navbar from './components/layout/Navbar';
import Index from './components/layout/Index';
import { Provider } from './context';
import Lyrics from './components/layout/Lyrics';

const App = () => {
  return (
    <Provider>
      <Router>
        <Fragment>
          <Navbar />
          <div className='container'>
            <Switch>
              <Route exact path='/' component={Index}/>
              <Route exact path='/lyrics/track/:id' component={Lyrics} />
            </Switch>
          </div>
        </Fragment>
      </Router>
    </Provider>
  );
}

export default App;
