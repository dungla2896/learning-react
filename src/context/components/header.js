import React from 'react';
import MyContext from '../global/my-context';

const HeaderComponent = () => {
  return (
    <MyContext.Consumer>
    {context => (
      <header className="my-header">
        <h1 className="title">This is a header</h1>
        <h3> Hi: {context.username}</h3>
      </header>
    )}
    </MyContext.Consumer>
  )
}
export default HeaderComponent;