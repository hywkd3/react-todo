import React from 'react';
import styled, { css } from 'styled-components';




const Text = styled.div`
  font-size: 21px;
  color: #495057;
  ${props =>
    props.status ? 
    css`
    text-decoration:line-through;
    color: #ced4da;
    `
    : css``}
`;



function Todo({ todo, onToggle, onRemove }) {
    return (
        <li class="list-group-item row" >
            <Text status={todo.status}>{todo.work}</Text>
            <button type="button" class="btn btn-success" onClick={() => onToggle(todo.id)}>Checked</button>

            <button type="button" class="close btn" aria-label="Close" onClick={() => onRemove(todo.id)}>
                <span aria-hidden="true">&times;</span>
            </button>
        </li>
    );
}

//css
const ListTempleateBlock = styled.div`
  width: 300px;
  height: 100px;
  margin: 0 auto; /* 페이지 중앙에 나타나도록 설정 */
`;
  
function TodoList( {todos, onToggle, onRemove} ) {
  return (
    <ListTempleateBlock>
      <h1>To do list:</h1>
      <ul class="list-group">
        {todos.map(todo => (
          <Todo todo={todo} key={todo.id} onToggle={onToggle} onRemove={onRemove} />
            ))}
      </ul>
    </ListTempleateBlock>
  );
}

export default TodoList;