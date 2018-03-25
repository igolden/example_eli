/********************************************************
 * What is this component? What props does it take? 
 *
 * @flow
 ********************************************************/
import React, { PropTypes } from 'react'


export default function MessageDisplay (props) {
  return (
        <h1>{props.message}</h1>
  )
}
