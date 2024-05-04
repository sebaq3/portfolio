// StateContext.js
import React, { createContext, useContext, useState } from 'react';

const StateContext = createContext();

export const StateProvider = ({ children }) => {
  const [showInicio, setShowInicio] = useState(true);

  return (
    <StateContext.Provider value={{ showInicio, setShowInicio }}>
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => {
  return useContext(StateContext);
};  