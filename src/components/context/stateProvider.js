import { createContext, useContext, useReducer } from "react";
import stateReducer from "./stateReducer";
import { INITIAL_STATE } from "./stateReducer";

const StateContext = createContext();

export const useStateValue = () => {
  return useContext(StateContext);
};

const StateProvider = ({ children }) => {
  return (
    <StateContext.Provider value={useReducer(stateReducer, INITIAL_STATE)}>
      {children}
    </StateContext.Provider>
  );
};

export default StateProvider;
