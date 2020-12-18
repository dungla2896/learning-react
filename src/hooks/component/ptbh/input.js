import React from 'react';
import PropTypes from 'prop-types';
const InputData = (props) => {
  return(
    <>
      <input onChange={props.change} type={props.type} name={props.name} />
    </>
  );
}
InputData.propTypes = {
  type: PropTypes.string,
  name: PropTypes.string,
  change: PropTypes.func.isRequired
}
export default React.memo(InputData);