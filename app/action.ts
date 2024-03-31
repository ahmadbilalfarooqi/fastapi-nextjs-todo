"use server";

import { revalidateTag } from "next/cache";

export const getTask = async (url: string) => {
  const fetchTask = await fetch(url, {
    cache: "no-store",
    next: {
      tags: ["todos"],
    },
  });
  const res = await fetchTask.json();
  return res;
};

export const addTask = async (url: string, data: any) => {
  const fetchTask = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  revalidateTag("todos");

  return "Task Added";
};

export const deleteTask = async (url: string) => {
  const fetchTask = await fetch(url, {
    method: "DELETE",
  });
  revalidateTag("todos");
  return "Task Deleted";
};
