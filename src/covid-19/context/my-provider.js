import React from 'react';
import MyContext from './my-context';
import { api } from '../api/index';

class ApiProvider extends React.Component {
  constructor() {
    super();
    this.state = {
      virus: []
    }
  }

  setStateAsync = (state) => {
    return new Promise(resolve => {
      this.setState(state, resolve);
    })
  }
  // partials
  async componentDidMount(){
    const data = await api.getDataVirusCorona();
    await this.setStateAsync({...this.state, virus: data});
  }

  render() {
    return(
      <MyContext.Provider value={this.state.virus}>
        {this.props.children}
      </MyContext.Provider>
    );
  }
}
export default ApiProvider;