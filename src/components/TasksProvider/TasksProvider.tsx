import { createContext, ReactNode, useEffect, useReducer } from "react";
import { ITask } from '../../types/task.types';
import * as tasksApi from '../../api/tasks';
import { Action, reducer } from "./reducer";
import { initialState, ITasksState } from './initialState';
import { Types } from "./types";
import { TasksFilter } from "./TasksFilter";

interface ITasksProviderProps {
  children: ReactNode;
}

interface ITasksProviderValue extends ITasksState {
  addTask: (task: ITask) => void;
  deleteTask: (task: ITask) => void;
  toggleFilter: (filter: TasksFilter) => void;
  fetchTasks: (tasks: ITask[]) => void;
  editTask: (task: ITask) => void;
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
    dispatch({ type: Types.AddTask, payload: task });
  };

  const deleteTask = (task: ITask) => {
      dispatch({ type: Types.DeleteTask, payload: task });
  };

  const toggleFilter = (filter: TasksFilter) => {
    dispatch({ type: Types.ToggleFilter, payload: filter });
  };

  const fetchTasks = () => {
    tasksApi.fetchTasks().then((tasks) => {
      dispatch({ type: Types.FetchTasks, payload: tasks });
    });
  };
  
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
