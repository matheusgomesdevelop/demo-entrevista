import React, { createContext, useEffect, useState } from "react";

interface IMenuContextProps {
  isMobile: boolean;
  isDesktop: boolean;
  isCollapsed: boolean;
  setIsCollapsed(status: boolean): void;
  closeSideMenu(): void;
  openSideMenu(): void;
}

interface IMenuProviderProps {
  children?: React.ReactNode;
}

export const MenuContext = createContext({} as IMenuContextProps);

export const MenuProvider: React.FC<IMenuProviderProps> = ({ children }: IMenuProviderProps) => {
  const [isMobile, setIsMobile] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const resolution = 1200;
      const desktopResolution = 599;

      setIsDesktop(window.innerWidth <= desktopResolution);
      window.addEventListener("resize", () => {
        setIsDesktop(window.innerWidth <= desktopResolution);
      });

      setIsMobile(window.innerWidth <= resolution);
      window.addEventListener("resize", () => {
        setIsMobile(window.innerWidth <= resolution);
      });
    }
  }, []);

  function closeSideMenu() {
    setIsCollapsed(false);
  }

  function openSideMenu() {
    setIsCollapsed(true);
  }

  return (
    <MenuContext.Provider
      value={{
        isMobile,
        isDesktop,
        isCollapsed,
        setIsCollapsed,
        closeSideMenu,
        openSideMenu,
      }}
    >
      {children}
    </MenuContext.Provider>
  );
};
