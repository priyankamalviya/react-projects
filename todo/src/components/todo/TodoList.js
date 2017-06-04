import React from 'react'
import {TodoItem} from './TodoItem';
import PropTypes from 'prop-types'; // ES6

export const TodoList = (props) => {
  return (
    <div className="ToDo-List">
      <ul>
      {
        props.todos.map(
          (todo) =>
          <TodoItem handleToggle = {props.handleToggle} key={todo.id} {...todo} handleRemove={props.handleRemove}/>
          )
      }
      </ul>
    </div>
  )
}

TodoList.propTypes = {
  todos: PropTypes.array.isRequired
}
