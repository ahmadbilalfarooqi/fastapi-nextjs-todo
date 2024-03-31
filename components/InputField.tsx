"use client";
import React, { useState } from "react";
import { addTask } from "@/app/action";

const InputField = () => {
  const [input, setInput] = useState("");

  const handleAddTask = () => {
    addTask("http://127.0.0.1:8000/todos/", { content: input });
    setInput(""); // Clearing the input field
  };

  return (
    <div className="flex gap-10 p-4">
      <input
        type="text"
        placeholder="Enter a Task"
        value={input}
        required
        onChange={(e) => setInput(e.target.value)}
        className="border bottom-1 p-4 rounded-md"
      />

      {input ? (
        <button
          onClick={handleAddTask}
          className="bg-black hover:bg-gray-800 text-white font-bold py-2 px-4 rounded"
        >
          Add Task
        </button>
      ) : null}
    </div>
  );
};

export default InputField;
