import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addTodo } from '../features/redux/todoSlice';
import TodoItem from './TodoItem';
import { AddFunctionsContainer, AddTodoButton, AddTodoInput, InfoContainer, TodoListContainer, TodoListTitle, TodoListUl } from '../styles/TodoListStyles';
import { toast } from 'react-toastify';

const TodoList: React.FC = () => {
  const todos = useSelector((state: any) => state.todos);
  const dispatch = useDispatch();

  const [newTodoText, setNewTodoText] = useState('');

  const handleAddTodo = () => {
    if (newTodoText.trim() !== '') {
      dispatch(addTodo({
        id: Date.now(),
        text: newTodoText,
        completed: false,
      }));

      setNewTodoText('');

      toast.success('Tarea agregada correctamente', {
        position: 'top-right',
        autoClose: 1000,
      });

    } else {
      toast.error('El campo de nueva tarea está vacío', {
        position: 'top-right',
        autoClose: 1000,
      });
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
            {todos.length !== 0
                    ?
                (<TodoListTitle>Lista de Tareas</TodoListTitle>)
                    :
                (<TodoListTitle>No hay tareas cargadas aún</TodoListTitle>)
            }
            <TodoListUl>
                {todos.map((todo: any) => (
                <TodoItem key={todo.id} todo={todo} />
                ))}
            </TodoListUl>
        </InfoContainer>
    </TodoListContainer>
  );
};

export default TodoList;
