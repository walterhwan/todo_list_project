import React from 'react';

class TodoList extends React.Component {
    render() {
      let { todos, receiveTodo } = this.props;
      return (
        <ul>
          {todos.map((todo) => <li key={todo.id}>{todo.title}</li>)}
        </ul>
      );
    }
}

export default TodoList;
