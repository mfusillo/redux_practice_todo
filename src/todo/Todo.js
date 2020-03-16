import React, {useState} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {create, edit, remove, toggleIsComplete} from './todoSlice'

const Todo = () => {

  const[inputText, setInputText] = useState('')
  const dispatch = useDispatch()


  const todos = useSelector(state => state.todos)

  const handleSubmit = event => {
    event.preventDefault()

    dispatch(create(inputText))
    //finish this submit later
  }

  const handleDelete = (id) => () => {
    dispatch(remove(id))
  }

  const handleToggle = (id) => () => {
    dispatch(toggleIsComplete(id))
  }



  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input onChange={event => setInputText(event.target.value)} value={inputText}/>
        <button type="submit">Create new</button>
      </form>
      
      {todos.map(todo => (
        <div key={todo.id}>
          
           {todo.description} {todo.isComplete ? 'Done' : ''}
          <button onClick={handleDelete(todo.id)}>Delete</button>
          <button onClick={handleToggle(todo.id)}>Toggle Complete</button>
        
        </div>
      ))}
     
    </div>
  )
}

export default Todo