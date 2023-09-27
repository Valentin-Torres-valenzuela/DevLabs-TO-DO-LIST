import React from 'react';
import { useDispatch } from 'react-redux';
import { toggleTodo, removeTodo } from '../features/redux/todoSlice';
import {
    TodoListItem,
    TodoListItemText,
    TodoListCheckbox,
    RemoveTodoButton,
} from '../styles/TodoItemStyles';
import { Todo } from '../types/types';

interface TodoItemProps {
    todo: Todo;
}

const TodoItem: React.FC<TodoItemProps> = ({ todo }) => {
    const dispatch = useDispatch();

    const handleToggle = () => {
        dispatch(toggleTodo(todo.id));
    };

    const handleRemove = () => {
        dispatch(removeTodo(todo.id));
    };

return (
    <TodoListItem>
        <div>
            <TodoListCheckbox
                type="checkbox"
                checked={todo.completed}
                onChange={handleToggle}
            />
            <TodoListItemText>{todo.text}</TodoListItemText>
        </div>
        <RemoveTodoButton onClick={handleRemove}><i className="fa-solid fa-trash"></i></RemoveTodoButton>
    </TodoListItem>
  );
};

export default TodoItem;
