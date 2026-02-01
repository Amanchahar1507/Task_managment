"use client";

import { useState } from "react";
import { Task } from "@/types/task";

type Props = {
  task: Task;
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
  onUpdate: (id: string, title: string) => void;
};

export default function TaskItem({
  task,
  onToggle,
  onDelete,
  onUpdate
}: Props) {
  const [isEditing, setIsEditing] = useState(false);
  const [title, setTitle] = useState(task.title);

  const saveEdit = () => {
    if (!title.trim()) return;
    onUpdate(task.id, title);
    setIsEditing(false);
  };

  return (
    <div className="task">
      {isEditing ? (
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      ) : (
        <span
          style={{
            textDecoration: task.completed ? "line-through" : "none"
          }}
        >
          {task.title}
        </span>
      )}

      <div className="task-actions">
        <button onClick={() => onToggle(task.id)}>
          {task.completed ? "Undo" : "Done"}
        </button>

        {isEditing ? (
          <button onClick={saveEdit}>Save</button>
        ) : (
          <button onClick={() => setIsEditing(true)}>Edit</button>
        )}

        <button onClick={() => onDelete(task.id)}>Delete</button>
      </div>
    </div>
  );
}
