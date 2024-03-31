"use client";
import { deleteTask } from "@/app/action";
import { Task } from "@/app/page";
import React from "react";

const TaskMapping = ({ tasks }: { tasks: Task[] }) => {
  return (
    <div>
      {tasks &&
        tasks.map((task: Task) => (
          <div key={task.id} className="">
            <p>{task.id}</p>
            <p>{task.content}</p>
            <button
              className="bg-red-600 text-white font-bold mt-5 py-2 px-4 rounded text-sm"
              onClick={() =>
                deleteTask("http://127.0.0.1:8000/todos/" + task.id)
              }
            >
              delete
            </button>
            {/* <button
              onClick={() =>
                updateTask("http://127.0.0.1:8000/todos/", +task.id)
              }
            >
              edit
            </button> */}
          </div>
        ))}
    </div>
  );
};

export default TaskMapping;
