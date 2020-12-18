import React from 'react';
import PropTypes from 'prop-types';
const InputTodo = (props) => {
  return (
    <>
      <input value={props.value} onChange={props.change} type={props.type} />
    </>
  )
}
InputTodo.propTypes = {
  type: PropTypes.string,
  change:PropTypes.func.isRequired,
  value: PropTypes.string
}
export default React.memo(InputTodo);