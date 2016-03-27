import React, { Component } from 'react';
import Relay from 'react-relay';
import './Reindex';
import VenueApp from './containers/VenueApp';
import AppRoute from './routes/AppRoute';

export default class App extends Component {
  render() {
    return (
      <Relay.RootContainer
        Component={VenueApp}
        route={new AppRoute}
        forceFetch={true}
      />
    );
  }
}
