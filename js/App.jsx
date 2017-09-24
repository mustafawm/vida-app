import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Landing from './Landing';
import Search from './Search';

const Four0Four = () => <h1>Error 404: not found</h1>

const App = () => (
  <BrowserRouter>
    <div className="app">
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route path="/search" component={Search} />
        <Route component={Four0Four} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default App;
