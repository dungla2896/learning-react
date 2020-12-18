import React from 'react';
import PropTypes from 'prop-types';

const Input = (props) => {
  return (
    <>
      <input onChange={props.change} name={props.name} defaultValue={props.value} />
    </>
  );
}
Input.propTypes = {
  name: PropTypes.string,
  change: PropTypes.func
}
export default Input;
