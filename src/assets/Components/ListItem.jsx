import React from 'react'
import { useDispatch } from 'react-redux'
import { edit, remove } from '../features/todo/todoSlice';

const ListItem = ({todo}) => {

const  dispatch =  useDispatch ();

const handleDelete = (id) => {
  dispatch (remove (id));
};

const handleEdit = (todo) => {
  dispatch( edit(todo))
}

  return (
    <li className='list-group-item rounded-0'>
    { todo.text}
    <button className='btn btn-danger btn-sm rounded-0 float-end' onClick={() => handleDelete(todo.id)}> Delete</button>
    <button className='btn btn-warning  btn-sm rounded-0 float-end' onClick={() =>  handleEdit (todo)}> Edit</button>
    </li>
  
  )
}

export default ListItem
