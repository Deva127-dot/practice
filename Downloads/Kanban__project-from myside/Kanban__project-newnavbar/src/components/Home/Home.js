import styles from "./Home.module.css";
import React, { useState, useEffect } from "react";
import CloseIcon from "@mui/icons-material/Close";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";

function TodoList() {
  const [todos, setTodos] = useState([]); // array to store todo data
  const [inputValue, setInputValue] = useState(""); // for input value
  const [todoHeader, setTodoHeader] = useState(""); // for header
  const [todoForm, settodoForm] = useState(false); // form display

  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem("premtodo"));
    if (storedData) {
      setTodos(storedData);
    }
  }, []);

  const handleFormSubmit = (id) => {
    if (inputValue.trim() !== "") {
      // setTodos([...todos, inputValue]);
      let modifyData = todos;
      // todos.map(item=>item+2)
      for (let index = 0; index < todos.length; index++) {
        if (modifyData[index].id == id) {
          modifyData[index].content.push({
            id: Math.floor(Math.random() * 1000),
            content: inputValue,
          });

          setTodos(modifyData);
          localStorage.setItem("premtodo", JSON.stringify(todos));
        }
      }
      setInputValue("");
      document.getElementById(id).value = "";
    }
    localStorage.setItem("todos", todos);
  };

  const handleTodoHeader = () => {
    const data = {
      header: todoHeader,
      content: [],
      id: Math.floor(Math.random() * 1000),
    };

    setTodos([...todos, data]);
    localStorage.setItem("premtodo", JSON.stringify([...todos, data]));
    settodoForm(false);
  };
  const handleClose = (id) => {
    const tempArray = todos.filter((item) => item.id !== id);
    // console.log(tempArray);
    setTodos(tempArray);
    localStorage.setItem("premtodo", JSON.stringify(tempArray));
  };
  const handleCloseList = (boardId, listId) => {
    const tempA = todos;
    for (let index = 0; index < todos.length; index++) {
      if (todos[index].id == boardId) {
        const tempArray = todos[index].content.filter(
          (item) => item.id != listId
        );
        console.log(tempArray);
        tempA[index]["content"] = tempArray;
        // console.log(tempA[index]);
        setTodos([...tempA]);
        localStorage.setItem("premtodo", JSON.stringify(todos));
      }
    }
  };
  return (
    <div className={styles.main}>
      <div className={styles.container}>
        {todos?.map((item,i) => (
          <div key={i} className={styles.todosBox} draggable>
            <div className={styles.header}>
              <span>{item.header}</span>
              <span onClick={() => handleClose(item.id)}>
                <HighlightOffIcon className={styles.mainBtn}  />
              </span>
            </div>
            <ul>
              {item.content?.map((it, i) => (
                <li key={i} className={styles.todolist} draggable>
                  {it.content}{" "}
                  <span onClick={() => handleCloseList(item.id, it.id)}>
                    <span className={styles.cutIcon}>
                        <CloseIcon className={styles.cutIconBtn}/>
                    </span>
                  </span>
                </li>
              ))}
            </ul>
            <form>
              <input
              // value={inputValue}
                type="text"
                autoComplete="off"
                id={item.id}
                placeholder="Enter a Title for This Card..."
                onChange={(e) => setInputValue(e.target.value)}
                className={styles.inputTitle}
              />
            </form>

            <button
              type="submit"
              className={styles.btnCard}
              onClick={() => handleFormSubmit(item.id)}
            >
              Add Card
            </button>
          </div>
        ))}
      </div>
      <div className={styles.addBoardBox}>
        {!todoForm && (
          <button className={styles.btn} onClick={() => settodoForm(true)}>
            <span className={styles.plus}>+</span>Add a New List
          </button>
        )}
        {todoForm && (
          <div className={styles.addBoardForm}>
            <input
              type="text"
              placeholder="Enter List Title..."
              className={styles.inputbox}
              onChange={(e) => setTodoHeader(e.target.value)}
            />
            <button className={styles.btnList} onClick={handleTodoHeader}>
              Add List
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default TodoList;