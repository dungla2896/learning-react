import React from 'react';

class FooterComponent extends React.Component {
  render() {
    return (
      <>
        <footer style={{backgroundColor: this.props.bgColor}} className="footer">
          <h2>This is a footer</h2>
        </footer>
      </>
    )
  }
}
export default FooterComponent;