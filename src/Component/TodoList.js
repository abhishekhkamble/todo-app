import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function TodoList({ todos, setTodos, setEditTodos }) {
  const handleDelete = ({ id }) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const handleComplete = (todo) => {
    setTodos(
      todos.map((item) => {
        if (item.id === todo.id) {
          return { ...item, completed: !item.completed };
        }
        return item;
      })
    );
  };
  // const handleEdit = ({id})=>{
  //     const findTodo = todos.find((todo)=>todo.id === id);
  //     setEditTodos(findTodo)
  // }
  return (
    <Container>
      <Row>
        {todos.map((todo) => (
          <Col xs={12} sm={6} md={4} lg={3} xl={2} key={todo.id}>
            <li className="list-item li-display">
              <input
                type="text"
                className={`list ${todo.completed ? "complete" : ""}`}
                value={todo.title}
                onChange={(event) => event.preventDefault()}
              />
              <div>
                <button
                  className="button-complete"
                  onClick={() => handleComplete(todo)}
                >
                  <i className="fa fa-check-circle"></i>
                </button>
                {/* <button   onClick={()=>handleEdit(todo)}>
                      <i className="fa fa-edit"></i>
                    </button> */}
                <button
                  onClick={() => handleDelete(todo)}
                  className="button-delete"
                >
                  <i className="fa fa-trash"></i>
                </button>
              </div>
            </li>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default TodoList;
