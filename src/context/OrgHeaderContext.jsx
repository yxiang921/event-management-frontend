/* eslint-disable react/prop-types */
import { createContext, useContext, useState } from "react";

const OrgHeaderContext = createContext();

export const OrgHeaderProvider = ({ children }) => {
  const [activeTab, setActiveTab] = useState("overview");

  return (
    <OrgHeaderContext.Provider
      value={{
        activeTab,
        setActiveTab,
      }}
    >
      {children}
    </OrgHeaderContext.Provider>
  );
};

export const useOrgHeader = () => {
  return useContext(OrgHeaderContext);
};
