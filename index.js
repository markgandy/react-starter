import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'file?name=[name].[ext]!./index.html';
import Relay from 'react-relay';
import Reindex from './Reindex';

Relay.injectNetworkLayer(Reindex.getRelayNetworkLayer());
ReactDOM.render(<App />, document.getElementById('app'));
