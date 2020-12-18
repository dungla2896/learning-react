import React from 'react';

class Lifecycle extends React.Component {
  constructor() {
    super();
    this.state = {
      number : 10,
      color : 'red'
    }
  }
  static getDerivedStateFromProps(props, state) {
    console.log(props, state);
    if(props.counter !== state.number){
      return {number: props.counter};
    }
    return null;
  }
  shouldComponentUpdate(nextProps, nextState) {
    console.log(nextProps, nextState);
    // if(nextProps.counter !== nextState.number){
    //   return true;
    // }
    // return false;
    return true;
  }

  getSnapshotBeforeUpdate(prevProps, prevState){
    const newColor = prevState.color !== prevProps.color  ? prevProps.color : prevState.color;
    return newColor;
  }
  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log(snapshot);
    document.getElementById('title').style.color = snapshot;
  }

  componentWillUnmount(){
    console.log(`component da bi xoa`);
  }

  render() {
    console.log(`component da dc render`);
    return(
      <>
        <h2>Number : {this.state.number}</h2>
        <p id="title" style={{color: this.state.color}}>This page contains a detailed API</p>
      </>
    )
  }
}
export default Lifecycle;