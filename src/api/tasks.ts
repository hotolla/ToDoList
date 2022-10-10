import { AxiosRequestConfig } from "axios";
import { ITask } from "../types/task.types";
import { api } from "./api";

export const fetchTasks = (config?: AxiosRequestConfig) => {
  return api.get("/tasks", config).then(({ data }) => {
    return data;
  });
};

export const deleteTask = (id: ITask["id"], config?: AxiosRequestConfig) => {
  return api.delete(`/tasks/${id}`, config).then(({ data }) => {
    return data;
  });
};

// need to fix
export const changeStatusTask = (task: ITask, config?: AxiosRequestConfig) => {
  return api.put(`/tasks/${task.id}`,  
    {
    ...task,
    isDone: !task.isDone,
    }, 
    config).then(({ data }) => {
    return data;
  });
};
// need to fix
export const editTask = (task: ITask,  newName: string, config?: AxiosRequestConfig) => {
  return api.put(`/tasks/${task.id}`, 
    {
    ...task,
    name: newName,
    }, 
    config).then(({ data }) => {
    return data;
  });
};

