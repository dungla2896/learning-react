import React from 'react';

// su dung function component
// su dung ham de tao 1 component chu ko su dung class

const Button = (props) => {
  // props : 1 bien dai dien cho tat cac cac thuoc tinh truyen component sau nay : thong thuong no la se la object
  // trong nay ko ton tai phuong thuc render
  return (
    <>
      <button
        onClick={props.click}
        type={props.type}
      >{props.children}</button>
    </>
  );
}

export default Button;