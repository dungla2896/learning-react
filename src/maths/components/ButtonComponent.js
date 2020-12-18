import React from 'react';
import PropTypes from 'prop-types';

export default class ButtonComponent extends React.Component {
  render() {
    return(
      <>
        <button onClick={this.props.btnClick} type={this.props.type}>{this.props.children}</button>
      </>
    );
  }
}

// kiem tra props cua component
ButtonComponent.propTypes = {
  btnClick: PropTypes.func.isRequired,
  type: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired
}
// gan gia tri mac dinh cho props - tao ra cai props mac dinh
// la phuong thuc chay dau tien khi component dc tao ra
ButtonComponent.defaultProps = {
  type: "button"
}

