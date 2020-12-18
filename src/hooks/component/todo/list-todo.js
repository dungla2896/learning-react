import React from 'react';

const ListTodo = props => {
  return (
    <>
      <ul>
        {props.todo.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </>
  )
}
export default React.memo(ListTodo);