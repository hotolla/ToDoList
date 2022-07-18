import { createContext, useReducer } from "react";
import { reducer } from "./reducer";
import { initialState } from './initialState';


export const TaskContext = createContext({});

interface IProps {

}

export const TaskProvider = ({ }:  IProps) => {
const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <TaskContext.Provider
      value={{

      }}
    >
      {}
    </TaskContext.Provider>
  )
}

