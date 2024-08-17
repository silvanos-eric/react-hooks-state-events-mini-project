import React from "react";

import Task from "./Task";

function TaskList({ tasks, onDelete }) {
  return (
    <div className="tasks">
      {/* display a list of tasks using Task component */}
      {tasks.map((task) => (
        <Task
          key={task.text}
          category={task.category}
          text={task.text}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
}

export default TaskList;
