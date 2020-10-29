import React, { createContext, useState } from "react";

// create and init
export const ComponentContext = createContext("LOGIN_COMPONENT");

export function ComponentContextProvider({ children }) {
  //   initial state
  const [Component, SetComponent] = useState("LOGIN_COMPONENT");

  return (
    // provider
    <ComponentContext.Provider value={{ Component, SetComponent }}>
      {children}
    </ComponentContext.Provider>
  );
}
