import React, { Component } from 'react';
import Relay from 'react-relay';

import VenueList from './VenueList';

class VenueApp extends Component {
  render() {
    return (
      <section>
        <VenueList venues={this.props.viewer.allVenues} viewer={this.props.viewer} />
      </section>
    );
  }
}

export default Relay.createContainer(VenueApp, {
  fragments: {
    viewer: () => Relay.QL`
      fragment on ReindexViewer {
        allVenues(first: 1000000) {
          edges {
            node {
              id,
              name,
              address
            }
          }
          ${VenueList.getFragment('venues')}
        },
      }
    `,
  },
});
