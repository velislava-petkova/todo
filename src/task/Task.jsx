import React from "react";
import { FaTrashAlt } from "react-icons/fa";
import "./Task.css";

function Task({ task, toggleComplete, deleteTask }) {
  return (
    <div className={"task-wrapper row " + task.completed}>
      <div className="col">
        <input
          type="checkbox"
          className="task-checkbox"
          checked={task.completed ? "checked" : ""}
          onChange={() => toggleComplete(task)}
        />
      </div>

      <div className="task-text-wrapper col">
        <p className="task-text" onClick={() => toggleComplete(task)}>
          {task.text}
        </p>
      </div>

      <div className="col">
        <button className="task-rm-btn" onClick={() => deleteTask(task)}>
          {<FaTrashAlt />}
        </button>
      </div>
    </div>
  );
}

export default Task;
