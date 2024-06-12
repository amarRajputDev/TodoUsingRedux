import { createSlice, nanoid } from '@reduxjs/toolkit';

const initialState = {
  todos: [{ id: 1, Text:"write todo" }]
};

export const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    Addtodo: (state, action) => {
      const todo = {
        id: nanoid(),
        Text: action.payload,
      };
      state.todos.push(todo);
    },
    Removetodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    }
  }
});

// Action creators are generated for each case reducer function
export const { Addtodo, Removetodo } = todoSlice.actions;

export default todoSlice.reducer;
