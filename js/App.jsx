import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import preload from '../data.json';
import Landing from './Landing';
import Search from './Search';
import Details from './Details';

const Four0Four = () => <h1>Error 404: not found</h1>;

const App = () => (
  <BrowserRouter>
    <div className="app">
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route
          path="/search"
          component={ props =>
            <Search
              shows={preload.shows}
              {...props}
            />
          }
        />
        <Route
          path="/details/:id"
          component= { props =>
            <Details
              show={preload.shows.find(s => props.match.params.id === s.imdbID)}
              {...props}
            />
          }
        />
        <Route component={Four0Four} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default App;
