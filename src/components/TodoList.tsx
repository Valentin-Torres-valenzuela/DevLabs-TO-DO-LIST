import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../features/redux/todoSlice';
import TodoItem from './TodoItem';
import { AddFunctionsContainer, AddTodoButton, AddTodoInput, InfoContainer, TodoListContainer, TodoListTitle, TodoListUl } from '../styles/TodoListStyles';
import { useTodos } from '../features/react-query/TodoAPI';
import { useMutation, useQueryClient } from 'react-query';

const TodoList: React.FC = () => {
    const dispatch = useDispatch();
    const [newTodoText, setNewTodoText] = useState('');

    const queryClient = useQueryClient();

    const { data: todos, error, isLoading } = useTodos();

    const handleAddTodo = () => {
        if (newTodoText.trim() !== '') {
        dispatch(addTodo({
            id: Date.now(),
            text: newTodoText,
            completed: false,
        }));
        setNewTodoText('');

        queryClient.invalidateQueries('todos');
        }
    };

    return (
        <TodoListContainer>
            <AddFunctionsContainer>
                <AddTodoInput
                    type="text"
                    placeholder="Nueva tarea..."
                    value={newTodoText}
                    onChange={(e) => setNewTodoText(e.target.value)}
                    maxLength={100}
                    />
                <AddTodoButton 
                    onClick={handleAddTodo}>Agregar
                </AddTodoButton>
            </AddFunctionsContainer>
            <InfoContainer>
                {isLoading ? (
                <TodoListTitle>Cargando...</TodoListTitle>
                ) : error ? (
                <TodoListTitle>Error al cargar las tareas</TodoListTitle>
                ) : todos && todos.length !== 0 ? (
                <TodoListTitle>Lista de Tareas</TodoListTitle>
                ) : (
                <TodoListTitle>No hay tareas cargadas aún</TodoListTitle>
                )}
                <TodoListUl>
                    {todos && todos.map((todo: any) => (
                    <TodoItem key={todo.id} todo={todo} />
                    ))}
                </TodoListUl>
            </InfoContainer>
        </TodoListContainer>
    );
};

export default TodoList;
