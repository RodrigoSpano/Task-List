import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    title:'Create your first Task',
    description: 'welcome to this web where you can create as many tasks as you like',
    completed: false,
    id: '1',
  }
]

export const taskSlice = createSlice({
  name:'tasks',
  initialState,
  reducers:{
    addTask: (state, action) => {
      state.push(action.payload);
    },
    editTask: (state, action) => {
      const {title, id, description} = action.payload
      const foundTask = state.find( task => task.id === id)
      if(foundTask) {
        foundTask.title = title,
        foundTask.description = description
      }
    },
    deleteTask: (state, action) => {
      const taskFound = state.find(task => task.id === action.payload)
      if(taskFound){
        state.splice(taskFound.indeOf, 1)
      }
    }
  },
})

export const { addTask, deleteTask, editTask } = taskSlice.actions;
export default taskSlice.reducer