import React from 'react';
import { withRouter, Route, Switch } from 'react-router-dom';

import Home from './pages/Home';
import Products from './pages/Products';

class Routes extends React.Component {
  render() {
    return (
      <Switch>
        <Route path="/products" component={Products} />
        <Route path="/" component={Home} />
      </Switch>
    );
  }
}

export default withRouter(Routes);
