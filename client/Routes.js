import React from 'react';
import { withRouter, Route, Switch } from 'react-router-dom';

import Home from './pages/Home';

class Routes extends React.Component {
  render() {
    return (
      <Switch>
        <Route path="/" component={Home} />
      </Switch>
    );
  }
}

export default withRouter(Routes);
