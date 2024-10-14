import React, { createContext, useContext, useState } from "react";

const SidebarMenuContext = createContext();

export const SidebarMenuProvider = ({ children }) => {
  const [selectedCategory, setSelectedCategory] = useState("processes");

  return (
    <SidebarMenuContext.Provider
      value={{ selectedCategory, setSelectedCategory }}
    >
      {children}
    </SidebarMenuContext.Provider>
  );
};

export const useSidebarMenuContext = () => useContext(SidebarMenuContext);
