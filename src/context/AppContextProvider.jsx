import React from "react";
import { AppContext } from "./AppContext";

export default function AppContextProvider({ children }) {
  const value = {};
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}
