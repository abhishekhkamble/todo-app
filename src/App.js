import React , {useState} from 'react'
import './App.css';
import Header from './Component/Header'
import Form from './Component/Form'
import TodoList from './Component/TodoList'
function App() {
  const [input, setInput] = useState("")
  const [todo, setTodo] = useState([])
  const [editTodo, seteditTodo] = useState(null)
  return (
    <div className="container">
      <div className="app">
      <Header/>
      <Form 
      input = {input}
      setInput = {setInput}
      todos = {todo}
      setTodo = {setTodo}
      editTodo={editTodo}
      seteditTodo={seteditTodo}
      />
      <TodoList todos ={todo} setTodos={setTodo} seteditTodo={seteditTodo}/>
    </div>
    </div>
  );
}

export default App;
