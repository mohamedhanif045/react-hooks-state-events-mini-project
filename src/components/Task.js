import React from "react";

function Task({ task, onDeleteTask }) {
  const handleDeleteClick = () => {
    onDeleteTask(task.text);
  };

  return (
    <div className="task">
      <div className="label">{task.category}</div>
      <div className="text">{task.text}</div>
      <button className="delete" onClick={handleDeleteClick}>X</button>
    </div>
  );
}

export default Task;
