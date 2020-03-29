import React from 'react';
import styled from 'styled-components';

//css
const CreateTempleateBlock = styled.div`
  width: 330px;
  height: 100px;
  margin: 0 auto; /* 페이지 중앙에 나타나도록 설정 */
`;


function CreateTodo({ work, onChange, onCreate }) {
    return (
      <CreateTempleateBlock>
        <h1 class="input-group-addon">Make list:</h1>
        <div class="input-group">
          <input
            class="form-control"
            name="work"
            placeholder="할일"
            onChange={onChange}
            value={work}
          />
          <span class="input-group-btn">
            <button class="btn btn-primary" onClick={() => onCreate(work)}>Save Item</button>
          </span>
        </div>
      </CreateTempleateBlock>
    );
  }

export default CreateTodo;