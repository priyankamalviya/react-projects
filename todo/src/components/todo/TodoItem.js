import React from 'react';
import {partial} from '../../lib/utils';

export const TodoItem = (props) => {
  /*This is how you apply a partial function. Null means it knows its content. id is the first item in the function*/
  const handleToggle = props.handleToggle.bind(null, props.id);
  const handleRemove = partial(props.handleRemove, props.id)
  return (
    <li key={props.id}>
      <span className="delete-item"><a href="#" onClick={handleRemove}>X</a></span>
      <input type="checkbox" onChange = {handleToggle} checked={props.isComplete}/>
      {props.name}
    </li>
  )
}

TodoItem.propTypes ={
  name: React.PropTypes.string.isRequired,
  isComplete: React.PropTypes.bool,
  id: React.PropTypes.number.isRequired
}
