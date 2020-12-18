import React from 'react';
import Button from './components/Button';
import Result from './components/Result';

class Counter extends React.Component {
  constructor() {
    super();
    // khai bao state
    this.state = {
      count : 0,
      age: 10
    }
    //this.age = 10;
    this.incrementCounter = this.incrementCounter.bind(this);
  }

  incrementCounter(){
    // hanh dong cho su kien click vao button +
    // cap nhat va thay doi state count - khi state count thay doi se keo theo viec render lai giao dien
    // chung ta cap nhat state
    this.setState({count: this.state.count + 1}, () => {
      // hanh dong de xu ly cho viec sau khi state dc cap nhat xong
      console.log('Da thay doi state');
    });
  }

  decrementCounter = () => {
    this.setState(state => {
      // this.state.count : la cai state ban dau dc tao ra
      // state: la state hien tai dang duoc cap nhat - xu ly
      return {count: state.count -1}
    });
  }

  viewDecrement = () => {
    this.decrementCounter();
    this.decrementCounter();
    this.decrementCounter();
    console.log(this.state.count);
  }

  render(){
    return(
      <>
        <Result count={this.state.count} />
        <Button type="button" click={this.incrementCounter}> + </Button>
        <Button type="button" click={this.viewDecrement}> - </Button>
      </>
    );
  }
}
export default Counter;