import { createSlice } from '@reduxjs/toolkit'

let todoId = 1;

export const slice = createSlice({
  name: 'todos',
  initialState: [],
  reducers: {
    create: (state, action) => {
      state.push({
        id: todoId,
        description: action.payload,
        isComplete: false
      })
      todoId++
    },

    edit: (state, action) => {
      const {id, description} = action.payload

      const todoToEdit = state.find(todo => todo.id === id)

      if(todoToEdit){
        todoToEdit.description = description
      }
    },

    toggleIsComplete: (state, action) => {
      const {payload} = action

      const todoToToggle = state.find(todo => todo.id === payload)

      if (todoToToggle) {
        todoToToggle.isComplete = !todoToToggle.isComplete
      }

    },

    remove: (state, action) => {
      const {payload} = action

      const indexOfToDeleteItem = state.find(todo => todo.id === payload)

      if (indexOfToDeleteItem !== -1) {
        state.splice(indexOfToDeleteItem, 1)
      }
    }


    
  } 
})

export const {create, edit, toggleIsComplete, remove} = slice.actions

export default slice.reducer