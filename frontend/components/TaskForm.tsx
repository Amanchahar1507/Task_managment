"use client";

import { useState } from "react";

export default function TaskForm({ onAdd }: { onAdd: () => void }) {
  const [title, setTitle] = useState("");

  const submit = async () => {
    if (!title.trim()) return;

    await fetch(`${process.env.NEXT_PUBLIC_API_URL}/tasks`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("accessToken")}`
      },
      body: JSON.stringify({ title })
    });

    setTitle("");
    onAdd();
  };

  return (
    <div>
      <input
        placeholder="Enter new task"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button className="primary-btn" onClick={submit}>
        Add Task
      </button>
    </div>
  );
}
