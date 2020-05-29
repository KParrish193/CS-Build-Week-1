import React from 'react';
import { Route } from 'react-router-dom';

import Grid from './components/Grid';
import Landing from './components/Landing';
import Menu from './components/Menu';
import Inside from './components/Inside'

import './App.css';

function App() {
  return (
    <div className="App" style={{height: '100vh', backgroundColor: '#282c34'}}>
        <Route exact path="/" component={Landing}/>
        <Route path="/grid" component={Grid} />
        <Route path="/inside" component={Inside} />
        <Route path="/menu" component={Menu} />
    </div>
  );
}

export default App;
