import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Todo } from "../../types/types"

const localStorageKey = 'todos';

const initialTodos = JSON.parse(localStorage.getItem(localStorageKey) || '[]');

const todosSlice = createSlice({
    name: 'todos',
    initialState: initialTodos,
    reducers: {
        addTodo: (state, action: PayloadAction<Todo>) => {
            state.push(action.payload);
            localStorage.setItem(localStorageKey, JSON.stringify(state));
        },
        toggleTodo: (state, action: PayloadAction<number>) => {
            const todoToToggle = state.find((todo: Todo) => todo.id === action.payload);
            if (todoToToggle) {
                todoToToggle.completed = !todoToToggle.completed;
                localStorage.setItem(localStorageKey, JSON.stringify(state));
            }
        },
        removeTodo: (state, action: PayloadAction<number>) => {
            state = state.filter((todo: Todo) => todo.id !== action.payload);
            localStorage.setItem(localStorageKey, JSON.stringify(state));
            return state;
        },
    },
});

export const { addTodo, toggleTodo, removeTodo } = todosSlice.actions;
export default todosSlice.reducer;
