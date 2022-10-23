import { createContext, ReactNode, useEffect, useReducer, useState } from "react";
import { ITask } from '../../types/task.types';
import * as tasksApi from '../../api/tasks';
import { Action, reducer } from "./reducer";
import { initialState, ITasksState } from './initialState';
import { Types } from "./types";
import { TasksFilter } from "./TasksFilter";

interface ITasksProviderProps {
  children: ReactNode;
}

interface IFilter {
  name_like?: string;
}

interface ITasksProviderValue extends ITasksState {
  addTask: (task: ITask) => void;
  deleteTask: (task: ITask) => void;
  toggleFilter: (filter: TasksFilter) => void;
  fetchTasks: (filter: IFilter) => void;
  editTask: (task: ITask) => void
}

export const TasksContext = createContext<ITasksProviderValue>({
  ...initialState,

  addTask: () => {},
  deleteTask: () => {},
  toggleFilter: () => {},
  fetchTasks: () => {},
  editTask: () => {}
});

export const TasksProvider = ({ children }: ITasksProviderProps, action: Action) => {
  const [ state, dispatch ] = useReducer(reducer, initialState);
  
  const addTask = (task: ITask) => {
    tasksApi.addTask(task).then((task) => {
      dispatch({ type: Types.AddTask, payload: task });
    });
  };

  const deleteTask = (task: ITask) => {
      dispatch({ type: Types.DeleteTask, payload: task });
  };

  const toggleFilter = (filter: TasksFilter) => {
    dispatch({ type: Types.ToggleFilter, payload: filter });
  };

  const fetchTasks = (filter?: IFilter) => {
    tasksApi.fetchTasks({
      params: filter
    }).then((tasks) => {
      dispatch({ type: Types.FetchTasks, payload: tasks });
    });
  };
  // как отменить запрос с моневиз пример
  const editTask = (task: ITask) => {
    dispatch({ type: Types.EditTask, payload: task });
  };

  const providerValue = {
    ...state,

    addTask,
    deleteTask,
    toggleFilter,
    fetchTasks,
    editTask
  };
  
  useEffect(() => {
    fetchTasks();
  }, []);

  return (
    <TasksContext.Provider value={providerValue}>
      {children}
    </TasksContext.Provider>
  );
};
