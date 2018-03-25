import React, {PropTypes} from 'react';

export default function Counter(props) {
  return (
    <div>
      <p>Counter</p>
      <p>
        <a onClick={() => props.increment()}>Increment</a>
        <br />
        <a onClick={() => props.decrement()}>Decrement</a>
      </p>
    </div>
  );
}
