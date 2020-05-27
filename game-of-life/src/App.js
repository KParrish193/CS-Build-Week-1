import React from 'react';
import { Route, Link } from 'react-router-dom';

import Grid from './components/Grid';
import Landing from './components/Landing';

import './App.css';

function App() {
  return (
    <div className="App">

        <Route exact path="/" component={Landing}/>
        <Route path="/grid" component={Grid} />

    </div>
  );
}

export default App;
