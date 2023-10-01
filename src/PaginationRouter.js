import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import App from './App';

const PaginationRouter = () => {
  return (
    <Router>
      <Switch>
        <Route path="/page/:page" component={App} />
        <Route exact path="/" component={App} />
      </Switch>
    </Router>
  );
};

export default PaginationRouter;
