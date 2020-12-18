import React, { Component } from 'react';
import Button from './components/ButtonComponent';
import Header from './components/HeaderComponent';
import Footer from './components/FooterComponent';
// tao ra 1 component
// su dung class component
class Maths extends Component {
  constructor(props) {
    super(props);
    this.thichThiSao = this.thichThiBam.bind(this);
  }
  // viet 1 ham xu ly event
  clickButton = () => {
    alert('Hi you');
  }

  thichThiBam() {
    //alert('Da bam roi nhe');
    this.clickButton();
  }

  // hien thi data
  render(){
    // tra ve ma JSX
    return (
      <>
        <Header bgColor="pink" />
        <Button
          btnClick={this.clickButton}
          type="submit"
        >click me</Button>
        <button onClick={this.thichThiSao}> bam vao toi di</button>
        <Footer bgColor="violet" />
      </>
    )
  }
}
export default Maths;