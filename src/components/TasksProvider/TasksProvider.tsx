import { createContext, ReactNode, useEffect, useReducer, useRef } from "react";
import { ITask } from '../../types/task.types';
import * as tasksApi from '../../api/tasks';
import { initialState, ITasksState } from './initialState';
import { Types } from "./types";
import { TasksFilter } from "./TasksFilter";
import { reducer } from "./reducer";

interface ITasksProviderProps {
  children: ReactNode;
}

interface IFilter {
  name_like?: string;
  isDone?: boolean | null
}

interface ITasksProviderValue extends ITasksState {
  addTask: (task: ITask) => void;
  addTasks: (tasks: ITask[]) => void;
  deleteTask: (task: ITask) => void;
  toggleFilter: (filter: TasksFilter) => void;
  fetchTasks: (filter: IFilter) => void;
  editTask: (task: ITask) => void;
  fetchTasksRequest: () => void;
  fetchTasksSuccess: () => void;
}

export const TasksContext = createContext<ITasksProviderValue>({
  ...initialState,

  addTask: () => {},
  addTasks: () => {},
  deleteTask: () => {},
  toggleFilter: () => {},
  fetchTasks: () => {},
  editTask: () => {},
  fetchTasksRequest: () => {},
  fetchTasksSuccess: () => {}
});

export const TasksProvider = ({ children }: ITasksProviderProps) => {
  const [ taskState, taskDispatch ] = useReducer(reducer.taskReducer, initialState);
  const [ loadingState, loadingDispatch ] = useReducer(reducer.loadingReducer, initialState);
  const [ filterState, filterDispatch ] = useReducer(reducer.filterReducer, initialState);
  const fetchTasksAbortController = useRef(new AbortController());

  const addTask = (task: ITask) => {
    tasksApi.addTask(task).then((task) => {
      console.log(task)
      taskDispatch({ type: Types.AddTask, payload: task });
    });
  };

  const addTasks = (tasks: ITask[]) => {
    taskDispatch({ type: Types.AddTasks, payload: tasks });
  };

  const fetchTasksRequest = () => {
    loadingDispatch({ type: Types.FetchTasksRequest });
  };

  const fetchTasksSuccess = () => {
    loadingDispatch({ type: Types.FetchTasksSuccess });
  };
  
//new tasks from download task cann't be deleted
  const deleteTask = (task: ITask) => {
    taskDispatch({ type: Types.DeleteTask, payload: task });
  };

  const toggleFilter = (filter: TasksFilter) => {
    tasksApi.fetchTasks({
      params: filter,
      signal: fetchTasksAbortController.current.signal
    }).then((filter) => {
      filterDispatch({ type: Types.ToggleFilter, payload: filter });
    }).catch((error) => {
      console.error(`Download error: ${error.message}`);
    });
  };

  const fetchTasks = (filter?: IFilter) => {
    fetchTasksRequest();

    tasksApi.fetchTasks({
      params: filter,
      signal: fetchTasksAbortController.current.signal
    }).then((tasks) => {
      taskDispatch({ type: Types.FetchTasks, payload: tasks });
    }).catch((error) => {
      console.error(`Download error: ${error.message}`);
    }).finally(fetchTasksSuccess);
  };

//fix it
  const editTask = (task: ITask) => {
    tasksApi.editTask(task).then((task) => {
      taskDispatch({ type: Types.EditTask, payload: task });
    }).catch((error) => {
      console.error(`Download error: ${error.message}`);
    });
  };

  const providerValue = {
    ...taskState,

    addTask,
    addTasks,
    deleteTask,
    toggleFilter,
    fetchTasks,
    editTask,
    fetchTasksRequest,
    fetchTasksSuccess
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
