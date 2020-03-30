import React, { useRef, useState  } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css'
import TodoList from './TodoList';
import CreateTodo from './CreateTodo';
import { createGlobalStyle } from 'styled-components';

function App() {

  // 인풋 
  const [inputs, setInputs] = useState({
    work: '',
    status: false
  });

  const { work, status } = inputs;
  // todo 목록
  const [todos, setTodos] = useState([
    {
      id: 1,
      work: '일',
      status: true
    },
    {
      id: 2,
      work: '공부',
      status: true
    },
    {
      id: 3,
      work: '휴식',
      status: false
    }
  ]);

  const nextId = useRef(4);

  // todo 생성
  const onCreate = work => {
    if(work === ""){
      alert("할일을 입력해주세요");
    } else {

      const todo = {
        id: nextId.current,
        work,
        status
      };
  
      setTodos([...todos, todo]);
  
      setInputs({
        work: '',
        status: false
      });
      nextId.current += 1;
    }
  };

  // 인풋 입력 상태 변경
  const onChange = e => {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value
    });
  };

  // todo 상태 변경
  const onToggle = id => {
    setTodos(
      todos.map(todo =>
        todo.id === id ? { ...todo, status: !todo.status } : todo
      )
    );
  };

  // todo 제거
  const onRemove = id => {
    // user.id 가 파라미터로 일치하지 않는 원소만 추출해서 새로운 배열을 만듬
    // = user.id 가 id 인 것을 제거함
    setTodos(todos.filter(todo => todo.id !== id));
  };

  // css
  const GlobalStyle = createGlobalStyle`
    body {
      background: #e9ecef;
    }
  `;

  return (
    <>
      <GlobalStyle />
      <CreateTodo work={work} onChange={onChange} onCreate={onCreate}/>
      <TodoList todos={todos} onToggle={onToggle} onRemove={onRemove} />
    </>
  );
}

export default App;
