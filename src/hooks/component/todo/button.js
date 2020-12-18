import React from 'react';
import PropTypes from 'prop-types';
const ButtonAddTodo = props => {
  return (
    <>
      <button onClick={() => props.add(props.value)} type={props.type}>{props.children}</button>
    </>
  )
}
ButtonAddTodo.propTypes = {
  type:PropTypes.string,
  children:PropTypes.string,
  add: PropTypes.func.isRequired,
  value: PropTypes.string
}
export default React.memo(ButtonAddTodo);