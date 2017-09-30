import React from 'react';
import { any, shape } from 'prop-types';
import Spinner from './Spinner';

class AsyncRoute extends React.Component {

  state = {
    loaded: false
  };

  componentDidMount() {
    // module provided by webpack
    this.props.loadingPromise.then(module => {
      this.component = module.default;
      this.setState({loaded: true});
    });
  }

  component = null;

  render() {
    if (this.state.loaded) {
      return <this.component { ...this.props.props} />;
    }
    return <Spinner />;
  }

}

// props
AsyncRoute.propTypes = {
  props: any.isRequired,
  loadingPromise: shape({}).isRequired // dynamic imports are pomises
};

export default AsyncRoute;
