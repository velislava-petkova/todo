import React, { useEffect, useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import Task from "../task/Task";
import "./App.css";
import { db } from "../firebase.js";
import {
  query,
  collection,
  onSnapshot,
  updateDoc,
  doc,
  addDoc,
  deleteDoc,
} from "firebase/firestore";

function App() {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState("");

  //create tasks
  const createTask = async (e) => {
    e.preventDefault(e);
    if (input === "") {
      alert("Please enter a valid task");
      return;
    }

    await addDoc(collection(db, "todos"), {
      text: input,
      completed: false,
    });

    setInput("");
  };

  //read todo
  useEffect(() => {
    const q = query(collection(db, "todos"));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      let todosArr = [];
      querySnapshot.forEach((doc) => {
        todosArr.push({ ...doc.data(), id: doc.id });
      });
      setTasks(todosArr);
    });

    return unsubscribe;
  }, []);

  //update todo

  const toggleComplete = async (task) => {
    await updateDoc(doc(db, "todos", task.id), {
      completed: !task.completed,
    });
  };

  //delete todos

  const deleteTask = async (task) => {
    await deleteDoc(doc(db, "todos", task.id));
  };

  //count unfinished tasks
  const unfinishedTasks = tasks.filter(
    (task) => task.completed === false
  ).length;

  return (
    <div className="main-page">
      <div className="container">
        <h3 className="heading">Tasks</h3>

        <form className="form" onSubmit={createTask}>
          <input
            className="input"
            type="text"
            placeholder="Add task"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />

          <button className="add-button">
            <AiOutlinePlus size={30} />
          </button>
        </form>

        <ul>
          {tasks.map((task, index) => (
            <Task
              key={index}
              task={task}
              toggleComplete={toggleComplete}
              deleteTask={deleteTask}
            />
          ))}
        </ul>

        {tasks.length < 1 && <p>You don't have any tasks yet</p>}

        {tasks.length >= 1 && (
          <p className="count">
            You have <span className="strong">{unfinishedTasks}</span>{" "}
            unfinished tasks
          </p>
        )}
      </div>
    </div>
  );
}

export default App;
