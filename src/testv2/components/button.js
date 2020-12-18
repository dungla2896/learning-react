import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
//import { connect } from 'react-redux';
import * as actions from '../actions/index';
//import store from '../store/index';

const ButtonComponent = (props) => {
  //console.log(store.get);
  //const { getState, dispatch } = store;
  //console.log(getState());
  const count = useSelector( state => state.counter.count);
  const dispatch = useDispatch();

  const handleClick = () => {
    if(props.type === 'increment'){
      //props.incrementClickCount(props.count);
      dispatch(actions.incrementCounter(count));
    } else if(props.type === 'decrement') {
      //props.decrementClickCount(props.count);
      dispatch(actions.decrementCounter(count));
    }
  }
  return (
    <>
      <button onClick={() => handleClick()}> {props.children} </button>
    </>
  )
}

// const mapStateToProps = (state) => ({
//   count: state.counter.count
// });

// const mapDispatchToProps = (dispatch) => ({
//   incrementClickCount: (val) => dispatch(actions.incrementCounter(val)),
//   decrementClickCount: (val) => dispatch(actions.decrementCounter(val))
// });

//export default connect(mapStateToProps, mapDispatchToProps)(React.memo(ButtonComponent));
export default React.memo(ButtonComponent);