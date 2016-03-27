import React, { Component } from 'react';
import Relay from 'react-relay';

import Venue from './Venue';

class VenueList extends Component {
  getFilteredVenues() {
    const edges = this.props.venues.edges;
    return edges;
  }

  makeVenue = (edge) => {
    return (
      <Venue key={edge.node.id}
            venue={edge.node}
            viewer={this.props.viewer} />
    );
  }

  render() {
    const venues = this.getFilteredVenues();
    const venueList = venues.map(this.makeVenue);
    return (
      <section>
        <ul>
          {venueList}
        </ul>
      </section>
    );
  }
}

export default Relay.createContainer(VenueList, {
  fragments: {
    venues: () => Relay.QL`
      fragment on _VenueConnection {
        edges {
          node {
            ${Venue.getFragment('venue')}
          }
        }
      }
    `
  },
});
