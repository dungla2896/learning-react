import React from 'react';
import LayoutComponent from './components/partials/layout';
import AddTodo from './components/add-todo';
import ListTodo from './components/list-todo';
import FinishedAndDelete from './components/action-todo';

class TodoApp extends React.Component {
  constructor() {
    super();
    this.state = {
      idTodo: 1,
      nameTodo: '',
      listTodo: [], // {id: 1, name :'Hoc CSS', done: false}
      showUnfinished: false
    }
  }

  // thuc hien them cong viec
  addTodo = (nameWork = '') => {
    if(nameWork.length > 0){
      // cap nhat thay doi state
      this.setState({
        idTodo: this.state.idTodo + 1, // dam bao id ko trung lap
        nameTodo: '',
        listTodo: [...this.state.listTodo, {
          id: this.state.idTodo,
          name: nameWork,
          done: false // mac dinh cong viec chua hoan thanh
        }]
      });
    }
  }

  changeNameTodo = (event) => {
    const name = event.target.value; // lay du lieu nhap vao o input
    this.setState({
      nameTodo: name // cap nhat lai state
    });
  }

  deleteItemTodo = (idWork) => {
    // xoa cac cong viec theo id tung cong viec
    // can loai cong co id trung voi idwork truyen vao trong mang listTodo khai o constructor
    const newTodo = this.state.listTodo.filter(item => item.id !== idWork);
    this.setState({
      ...this.state,
      listTodo: newTodo
    });
  }

  finishedItemTodo = (idWork) => {
    // cap nhat lai trang thai done ve true cua cong viec co ma id la idWork truyen vao
    const finishedTodo = this.state.listTodo.map( item => {
      return item.id === idWork ? {...item, done: !item.done} : item;
    });
    this.setState({
      ...this.state,
      listTodo: finishedTodo
    });
  }

  finishedAndDelete = (typeAction) => {
    switch (typeAction) {
      case 'deleteAll':
        this.setState({
          idTodo: 1,
          listTodo: [],
          showUnfinished: false
        });
        break;
      case 'finishedAll':
          const newFinish = this.state.listTodo.map( item => {
            return {...item, done: true}
          });
          this.setState({
            listTodo: newFinish,
            showUnfinished: true
          })
        break;
      case 'unfinishedAll':
        const newUnfinish = this.state.listTodo.map( item => {
          return {...item, done: false}
        });
        this.setState({
          listTodo: newUnfinish
        })
        break;
      default: 
          this.setState({
            listTodo: {...this.state.listTodo}
          })
        break;
    }
  }

  render() {
    return (
      <>
        <LayoutComponent>
          <AddTodo
            add={this.addTodo}
            change={this.changeNameTodo}
            value={this.state.nameTodo}
          />
          <FinishedAndDelete
            action={this.finishedAndDelete}
            show={this.state.showUnfinished}
          />
          <ListTodo
            todo={this.state.listTodo}
            delete={this.deleteItemTodo}
            finished={this.finishedItemTodo}
          />
        </LayoutComponent>
      </>
    )
  }
}
export default TodoApp;