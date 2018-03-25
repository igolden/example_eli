/********************************************************
 * What is this component? What props does it take?
 *
 * @flow
 ********************************************************/
import React, {PropTypes} from 'react';

export default function CountDisplay(props) {
  return <p>{props.count}</p>;
}
