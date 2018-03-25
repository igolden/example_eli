/********************************************************
 *
 *
 * @flow
 ********************************************************/

import React, {PropTypes, Component} from 'react';

export default class MessageEdit extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <input
        type="text"
        onChange={(e) => this.props.updateMessage(e.target.value)}
        value={this.props.message}
      />
    );
  }
}
