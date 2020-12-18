import React from 'react';
import Lifecycle from './components/LifeCycle';

class Index extends React.Component {
  // 1 - giai doan mouting
  constructor() {
    super();
    // a- khoi tao state
    this.state = {
      count: 0,
      show: true
    }
    // b- truyen con tro this cho phuong thuc
    console.log(`constructor of Index component`);
    // chay duy nhat 1 lan trong vong doi cua component
  }

  static getDerivedStateFromProps(props, state) {
    // thay doi state ban dau bang props truyen vao cho component
    console.log(`getDerivedStateFromProps of Index component`);
    return null;
  }

  componentDidMount() {
    // khi Dom giao dien da dc dung xong
    // thong thuong hay call data - api o day
    // chay duy nhat 1 lan trong vong doi cua component
    console.log(`componentDidMount of Index component`);
  }

  changeCounter = () => {
    this.setState({...this.state, count: this.state.count + 1});
  }
  showAndHide = () => {
    this.setState({...this.state, show: !this.state.show});
  }
  render() {
    console.log(`render of Index component`);
    return (
      <>
        <h1>This App Index - {this.state.count}</h1>
        <br/>
        <button onClick={this.changeCounter}>Click me</button>

        {this.state.show ? (<Lifecycle color="yellow" counter={this.state.count} />) : null}
    
        <button onClick={this.showAndHide}>show/hide Lifecycle</button>
      </>
    )
  }
}
export default Index;
