import React, { useState } from 'react';
import InputTodo from './component/todo/input';
import ButtonTodo from './component/todo/button';
import ListTodo from './component/todo/list-todo';

const TodoApp = () => {
  const [nameTodo, setNameTodo] = useState('');
  const [idTodo, setIdTodo] = useState(1);
  const [listTodo, setListTodo] = useState([]);

  const changeInput = (event) => {
    const val = event.target.value;
    setNameTodo(val);
  }

  const addTodo = (nameWork) => {
    if(nameWork.length > 0) {
      setIdTodo(idTodo+1);
      setListTodo([...listTodo, {
        id: idTodo,
        name: nameWork,
        done: false
      }]);
      setNameTodo('');
    }
  }

  return (
    <>
      <InputTodo value={nameTodo} change={changeInput} type="text" />
      <ButtonTodo
        value={nameTodo}
        add={addTodo}
        type="button"
      > Add </ButtonTodo>
      <ListTodo todo={listTodo}/>
    </>
  )
}
export default TodoApp;