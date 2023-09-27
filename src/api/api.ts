import { Todo } from '../types/types';

const todos: Todo[] = [];

export const getTodos = async () => {
    return todos;
};

// export const createTodo = async (text: string) => {
//     const newTodo = { id: todos.length + 1, text, completed: false };
//     todos.push(newTodo);
//     return newTodo;
// };