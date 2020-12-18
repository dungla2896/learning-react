import React from 'react';
import PropTypes from 'prop-types';
const ButtonComponent = (props) => {
  return (
    <>
      <button onClick={() => props.click()} type={props.type}>{props.children}</button>
    </>
  )
}
ButtonComponent.propTypes = {
  type: PropTypes.string,
  children: PropTypes.string,
  click: PropTypes.func.isRequired
}
export default React.memo(ButtonComponent);
