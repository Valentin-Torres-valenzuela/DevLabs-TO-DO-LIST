import { Todo } from '../types/types';

const todos: Todo[] = [];

export const getTodos = async () => {
    return todos;
};