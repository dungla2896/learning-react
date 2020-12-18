import React from 'react';
import PropTypes from 'prop-types';

const Button = (props) => {
  return (
    <>
      <button 
        type={props.type}
        onClick={props.click}
      >
        {props.children}
      </button>
    </>
  )
}
Button.propTypes = {
  click: PropTypes.func.isRequired,
  children: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired
}
export default Button;