import { Request, Response } from "express";
import prisma from "../prisma";

export const getTasks = async (req: any, res: Response) => {
  const { page = 1, status, search } = req.query;

  const tasks = await prisma.task.findMany({
    where: {
      userId: req.userId,
      completed: status ? status === "true" : undefined,
      title: search
        ? { contains: search as string, mode: "insensitive" }
        : undefined
    },
    skip: (Number(page) - 1) * 10,
    take: 10,
    orderBy: { createdAt: "desc" }
  });

  res.json(tasks);
};

export const createTask = async (req: any, res: Response) => {
  const { title } = req.body;

  if (!title) {
    return res.status(400).json({ message: "Title required" });
  }

  const task = await prisma.task.create({
    data: {
      title,
      userId: req.userId
    }
  });

  res.status(201).json(task);
};

export const toggleTask = async (req: any, res: Response) => {
  const { id } = req.params;

  const task = await prisma.task.findFirst({
    where: {
      id,
      userId: req.userId
    }
  });

  if (!task) {
    return res.status(404).json({ message: "Task not found" });
  }

  const updated = await prisma.task.update({
    where: { id },
    data: { completed: !task.completed }
  });

  res.json(updated);
};

export const updateTask = async (req: any, res: Response) => {
  const { id } = req.params;
  const { title } = req.body;

  if (!title) {
    return res.status(400).json({ message: "Title required" });
  }

  const task = await prisma.task.findFirst({
    where: {
      id,
      userId: req.userId
    }
  });

  if (!task) {
    return res.status(404).json({ message: "Task not found" });
  }

  const updatedTask = await prisma.task.update({
    where: { id },
    data: { title }
  });

  res.json(updatedTask);
};

export const deleteTask = async (req: any, res: Response) => {
  const { id } = req.params;

  const task = await prisma.task.findFirst({
    where: {
      id,
      userId: req.userId
    }
  });

  if (!task) {
    return res.status(404).json({ message: "Task not found" });
  }

  await prisma.task.delete({
    where: { id }
  });

  res.json({ message: "Task deleted" });
};
