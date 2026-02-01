"use client";

import { useEffect, useState } from "react";
import { apiFetch } from "@/lib/api";
import { logout, isLoggedIn } from "@/lib/auth";
import TaskForm from "@/components/TaskForm";
import TaskItem from "@/components/TaskItem";
import { Task } from "@/types/task";

export default function DashboardPage() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("");

  useEffect(() => {
    if (!isLoggedIn()) {
      window.location.href = "/login";
      return;
    }

    const fetchTasks = async () => {
      const query = `?search=${search}&status=${status}`;
      const data = await apiFetch(`/tasks${query}`);
      if (data) setTasks(data);
    };

    fetchTasks();
  }, [search, status]);

  const reloadTasks = async () => {
    const query = `?search=${search}&status=${status}`;
    const data = await apiFetch(`/tasks${query}`);
    if (data) setTasks(data);
  };

  const toggleTask = async (id: string) => {
    await apiFetch(`/tasks/${id}/toggle`, { method: "PATCH" });
    reloadTasks();
  };

  const deleteTask = async (id: string) => {
    await apiFetch(`/tasks/${id}`, { method: "DELETE" });
    reloadTasks();
  };

  const updateTask = async (id: string, title: string) => {
    await apiFetch(`/tasks/${id}`, {
      method: "PATCH",
      body: JSON.stringify({ title })
    });
    reloadTasks();
  };

  return (
    <div className="dashboard-page">
      <div className="dashboard-card">
        <h2>My Tasks</h2>

        <button className="logout-btn" onClick={logout}>
          Logout
        </button>

        <TaskForm onAdd={reloadTasks} />

        <div className="divider"></div>

        <input
          placeholder="Search task"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <select value={status} onChange={(e) => setStatus(e.target.value)}>
          <option value="">All</option>
          <option value="true">Completed</option>
          <option value="false">Pending</option>
        </select>

        <div className="divider"></div>

        {tasks.length === 0 && <p>No tasks found</p>}

        {tasks.map((task) => (
          <TaskItem
            key={task.id}
            task={task}
            onToggle={toggleTask}
            onDelete={deleteTask}
            onUpdate={updateTask}
          />
        ))}
      </div>
    </div>
  );
}
