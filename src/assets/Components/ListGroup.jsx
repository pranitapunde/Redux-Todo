import React from 'react';
import ListItem from './ListItem.jsx';
import { useSelector } from 'react-redux';

const ListGroup = () => {

  const {allTodos} =useSelector ((state) => state.todos);
  return (
    <ul className='list-group '>

      { allTodos.map ((todo) => (
           <ListItem key={todo.id} todo={todo}/>
        ))
        
      }

    </ul>
  )
}

export default ListGroup;
