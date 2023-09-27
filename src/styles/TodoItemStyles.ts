import styled from 'styled-components';

export const TodoListItem = styled.li`
  background-color: #fff;
  border: 1px solid transparent;
  padding: 8px;
  margin-bottom: 8px;
  border-radius: 3px;
  /* width: 60vw; */
  margin: 10px auto;
  display: flex;
  flex-direction: row;
  align-items: baseline;
  justify-content: space-between;
`;

export const TodoListItemText = styled.span`
  font-size: 18px;
  color: #6129FE;
`;

export const TodoListCheckbox = styled.input`
  margin-right: 10px;
  transform: scale(1.5);
  background-color: #6129FE !important; 
  &:checked {
    background-color: #6129FE !important;
  }
`;

export const RemoveTodoButton = styled.button`

  background-color: #c82333 ;
  color: #fff;
  border: none;
  padding: 8px 10px;
  font-size: 14px;
  cursor: pointer;
  transition: .3s all;
  border: transparent solid 1px;
  margin-left: 10px;
  border-radius: 3px;

  &:hover {
    background-color: #dc3545;
    border: #fff solid 1px;
  }
`;
