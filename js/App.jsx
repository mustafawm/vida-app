import React from 'react';
import { Provider } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import store from './store';
import AsyncRoute from './AsyncRoute';
import preload from '../data.json';

const Four0Four = () => <h1>Error 404: not found</h1>;

const App = () => (
  <Provider store={store} >
    <div className="app">
      <Switch>
        <Route
          exact
          path="/"
          component={ (props) => <AsyncRoute props={props} loadingPromise={import('./Landing')} />}
        />
        <Route
          path="/search"
          component={ props => <AsyncRoute props={{...props, shows: preload.shows}}
            loadingPromise={import('./Search')}
          />}
        />
        <Route
          path="/details/:id"
          component= { props => {
              const show = preload.shows.find(s => props.match.params.id === s.imdbID);
              return <AsyncRoute props={{...props, show}} loadingPromise={import('./Details')} />
            }
          }
        />
        <Route component={Four0Four} />
      </Switch>
    </div>
  </Provider>
);

export default App;
