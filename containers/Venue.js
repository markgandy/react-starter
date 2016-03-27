import React, { Component } from 'react';
import Relay from 'react-relay';

class Venue extends Component {
  render() {
    return (
      <li>
        <div>
          <p>{this.props.venue.name}</p>
          <p>{this.props.venue.address}</p>
        </div>
      </li>
    );
  }
}

export default Relay.createContainer(Venue, {
  fragments: {
    venue: () => Relay.QL`
      fragment on Venue {
        id,
        name,
        address
      }
    `,
  },
});
