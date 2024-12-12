import { createContext, useContext } from "react";
import { useState } from "react";

const SidebarContext = createContext();

// eslint-disable-next-line react/prop-types
export const SidebarProvider = ({ children }) => {
  const [activeTab, setActiveTab] = useState("dashboard");
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  return (
    <SidebarContext.Provider
      value={{
        activeTab,
        setActiveTab,
        isSidebarOpen,
        setIsSidebarOpen,
      }}
    >
      {children}
    </SidebarContext.Provider>
  );
};

export const useSidebar = () => {
  return useContext(SidebarContext);
};
