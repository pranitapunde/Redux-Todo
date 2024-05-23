import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { add, update } from '../features/todo/todoSlice'

const Form = () => {

  const {edit} = useSelector ( (state) => state.todos);
  const dispatch = useDispatch()

  const [text, setText] = useState("")
  const handleSubmit = (e) => {
    e.preventDefault()
    if(edit.isEdit){
      dispatch(update({
        id : edit.todo.id,
        text
      }))

      // console.log("Is EditMode On")
    }
    
    else{

      dispatch(add({

        id: crypto.randomUUID(),
        text,
      }))
    }
    setText("")
  };

  useEffect (() =>
  {
    setText ( edit.todo.text)
  } , [edit]);






  return (
    <form className=' my-2' onSubmit={handleSubmit}>
       
      <input type="text" className=' form-control rounded-0 my-2'
        value={text}
        onChange={(e) => setText(e.target.value)} placeholder='Enter your Name' required />

      <button className=' btn btn-success rounded-0 w-100' > Save</button> 

      
    </form>
  )
}

export default Form
