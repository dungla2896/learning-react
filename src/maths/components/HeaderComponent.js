import React from 'react';
import './common.css';

class HeaderComponent extends React.Component {
  render() {
    return(
      <>
        {/* day la ma jsx */}
        <header style={{backgroundColor: this.props.bgColor}} className="header">
          <h1>This is a header</h1>
        </header>
      </>
    );
  }
}
export default HeaderComponent;