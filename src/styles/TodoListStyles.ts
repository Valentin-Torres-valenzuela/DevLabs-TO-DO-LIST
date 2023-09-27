import styled from 'styled-components';

export const TodoListContainer = styled.div`
  background-color: #6129FE;
  color: white;
  padding: 16px;
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: start;
  justify-content: start;
`;

export const AddFunctionsContainer = styled.div`
  width: 30vw;
  margin-top:20px;
`;
export const InfoContainer = styled.div`
  width: 60vw;

`;

export const TodoListTitle = styled.h2`
  font-size: 24px;
  background-color: #4c29b5;
  border-radius: 3px;
  padding: 8px;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  text-align: center;
  /* width: 60vw; */
`;

export const TodoListUl = styled.ul`
  list-style-type: none;
  padding: 0;
`;

export const AddTodoInput = styled.input`
  padding: 8px;
  font-size: 16px;
  border: none;
  outline: none;
  border: transparent solid 1px;
  border-radius: 3px;
`;

export const AddTodoButton = styled.button`
  background-color: #4c29b5;
  color: #fff;
  border: none;
  padding: 8px 16px;
  font-size: 16px;
  cursor: pointer;
  transition: .3s all;
  border: transparent solid 1px;
  margin-left: 10px;
  border-radius: 3px;

  &:hover {
    background-color: #6129FE;
    border: #fff solid 1px;
  }
`;
