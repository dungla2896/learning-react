import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as actions from '../actions/index';

const ButtonComponent = (props) => {
  const clickCounter = () => {
    if(props.type === 'increment'){
      props.incrementClick(props.count);
    } else if(props.type === 'decrement') {
      props.decrementClick(props.count);
    }
  }
  return(
    <button onClick={() => clickCounter()}>{props.children}</button>
  )
}
ButtonComponent.propTypes = {
  children: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  incrementClick: PropTypes.func.isRequired,
  decrementClick: PropTypes.func.isRequired,
  count: PropTypes.number.isRequired
}

const mapStateToProps = (state) => ({
  // lay state tu reducer nam trong store
  count: state.counter.count
});
const mapDispatchToProps = (dispatch) => ({
  incrementClick: (val) => dispatch(actions.incrementCounter(val)),
  decrementClick: (val) => dispatch(actions.decrementCounter(val))
})

export default connect(mapStateToProps,mapDispatchToProps)(React.memo(ButtonComponent));