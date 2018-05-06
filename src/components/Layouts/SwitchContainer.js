import React, {Component} from 'react';
import {Switch, Route} from 'react-router-dom';

import {About, Portfolio, ContactForm} from '../Pages';

export default class SwitchContainer extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={About} />
        <Route path="/portfolio" component={Portfolio} />
        <Route path="/contact" component={ContactForm} />
      </Switch>
    );
  }
}
