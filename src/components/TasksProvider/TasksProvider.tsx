import { createContext, ReactNode, useEffect, useReducer, useRef } from "react";
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
  isDone?: boolean | null
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

export const TasksProvider = ({ children }: ITasksProviderProps) => {
  const [ state, dispatch ] = useReducer(reducer, initialState);
  const fetchTasksAbortController = useRef(new AbortController());

  const addTask = (task: ITask) => {
    tasksApi.addTask(task).then((task) => {
      dispatch({ type: Types.AddTask, payload: task });
    });
  };

  const deleteTask = (task: ITask) => {
    dispatch({ type: Types.DeleteTask, payload: task });
  };

  const toggleFilter = (filter: TasksFilter) => {
    tasksApi.fetchTasks({
      params: filter,
      signal: fetchTasksAbortController.current.signal
    }).then((filter) => {
      dispatch({ type: Types.ToggleFilter, payload: filter });
    }).catch((error) => {
      console.error(`Download error: ${error.message}`);
    });
  };

  const fetchTasks = (filter?: IFilter) => {
    tasksApi.fetchTasks({
      params: filter,
      signal: fetchTasksAbortController.current.signal
    }).then((tasks) => {
      dispatch({ type: Types.FetchTasks, payload: tasks });
    }).catch((error) => {
      console.error(`Download error1: ${error.message}`);
    });
  };

  const editTask = (task: ITask) => {
    tasksApi.editTask(task).then((task) => {
      dispatch({ type: Types.EditTask, payload: task });
    }).catch((error) => {
      console.error(`Download error: ${error.message}`);
    });
  };

  // const editTask = (task: ITask) => {
  //     dispatch({ type: Types.EditTask, payload: task });
  // };

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

  useEffect(() => {
    return () => {
      fetchTasksAbortController.current.abort();
      console.log("error");
    };
  }, []);

  return (
    <TasksContext.Provider value={providerValue}>
      {children}
    </TasksContext.Provider>
  );
};
