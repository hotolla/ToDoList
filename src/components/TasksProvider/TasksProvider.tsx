import { createContext, useReducer } from "react";
import { ITask } from "../../types/task.types";

export const TaskContext = createContext({});

interface IProps {

}

export const TaskProvider = ({ }:  IProps) => {
const [state, dispatch] = useReducer<>(reducer, initialState);

return (
  <TaskContext.Provider
    value={{

    }}
  >
    {children}
  </TaskContext.Provider>
)
}
