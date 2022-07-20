import { createContext, ReactNode, useReducer } from "react";
import { reducer } from "./reducer";
import { initialState, ITasksState } from './initialState';
import { ITask } from '../../types/task.types';
import { Types } from "./types";

interface ITasksProviderProps {
  children: ReactNode;
}

interface ITasksProviderValue extends ITasksState {
  addTask: (task: ITask) => void;
}

export const TasksContext = createContext<ITasksProviderValue>({
  ...initialState,

  addTask: () => {}
});

export const TasksProvider = ({ children }: ITasksProviderProps) => {
  const [ state, dispatch ] = useReducer(reducer, initialState);
  
  const addTask = (task: ITask) => {
    dispatch({ type: Types.AddTask, payload: task });
  };

  const providerValue = { ...state, addTask };

  return (
    <TasksContext.Provider value={providerValue}>
      {children}
    </TasksContext.Provider>
  );
};
