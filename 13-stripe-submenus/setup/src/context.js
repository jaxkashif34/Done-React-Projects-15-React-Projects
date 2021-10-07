import React, { useState, useContext } from "react";
import sublinks from "./data";

export const AppContext = React.createContext();

export const AppProvider = ({ children }) => {
  const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [location, setLocation] = useState({});
  const [page, setPage] = useState({ page: "", links: [] });

  const openSubmenu = (text, coordinates) => {
    const page = sublinks.find((link) => {
      return link.page === text;
    });
    setPage(page);
    setLocation(coordinates);
    setIsSubmenuOpen(true);
  };
  const closeSubmenu = () => {
    setIsSubmenuOpen(false);
  };
  const openSidebar = () => {
    setIsSidebarOpen(true);
  };
  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };
  return (
    <>
      <AppContext.Provider
        value={{
          isSidebarOpen,
          isSubmenuOpen,
          location,
          page,
          openSidebar,
          openSubmenu,
          closeSubmenu,
          closeSidebar,
        }}
      >
        {children}
      </AppContext.Provider>
    </>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
