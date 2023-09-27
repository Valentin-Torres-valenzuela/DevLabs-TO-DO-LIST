import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Todo } from "../../types/types"

const todosSlice = createSlice({
    name: 'todos',
    initialState: [] as Todo[],
    reducers: {
        addTodo: (state, action: PayloadAction<Todo>) => {
            state.push(action.payload);
        },
        toggleTodo: (state, action: PayloadAction<number>) => {
            const todoToToggle = state.find((todo) => todo.id === action.payload);
            if (todoToToggle) {
                todoToToggle.completed = !todoToToggle.completed;
            }
        },
        removeTodo: (state, action: PayloadAction<number>) => {
            const todoIndex = state.findIndex((todo) => todo.id === action.payload);
            if (todoIndex !== -1) {
                state.splice(todoIndex, 1);
            }
        },
    },
});

export const { addTodo, toggleTodo, removeTodo } = todosSlice.actions;
export default todosSlice.reducer;
