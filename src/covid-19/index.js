import React from 'react';
import LayoutComponent from './components/partials/Layout';
import Global from './components/Global';
import Countries from './components/Countries';
import CoronaProvider from './context/my-provider';

class Corona extends React.Component {
  render() {
    return(
      <LayoutComponent>
        <CoronaProvider>
          <Global/>
          <Countries/>
        </CoronaProvider>
      </LayoutComponent>
    );
  }
}
export default Corona;