import React from 'react';
import Button from './components/Button';
import Input from './components/Input';
import Result from './components/Result';

class TotalNumber extends React.Component {
  constructor(){
    super();
    this.state = {
      n1: 0,
      n2: 0,
      total: 0
    }
  }

  sumNumber = () => {
    let number1 = this.state.n1;
    let number2 = this.state.n2;
    if(!isNaN(number1) && !isNaN(number2)){
      // ca deu thuc su la so
      // thuc su ep ve so thuc
      number1 = parseFloat(number1);
      number2 = parseFloat(number2);
      let sum = number1 + number2;
      this.setState({total: sum});
    } else {
      this.setState({total: NaN});
    }
  }

  changeInput = (event) => {
    // lay ra ten cua thuoc name trong o input
    // de chung ta biet dc dang thao tac vs o input nao
    let nameInput = event.target.name;
    //console.log(nameInput);
    let valNumber = event.target.value;
    if(nameInput === 'number1'){
      this.setState({n1: valNumber});
    } else if(nameInput === 'number2') {
      this.setState({n2: valNumber});
    }
  }

  render() {
    return (
      <>
        <Input 
          name="number1"
          value={this.state.n1}
          change={this.changeInput}
        />
        <br/>
        <Input
          name="number2"
          value={this.state.n2} 
          change={this.changeInput}
        />
        <br/>
        <Button click={this.sumNumber} type="button"> Tong </Button>
        <Result total={this.state.total} />
      </>
    )
  }
}
export default TotalNumber;