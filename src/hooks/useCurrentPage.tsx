import { createContext, PropsWithChildren, useEffect, useState } from "react";

type TCurrentPageProvider = PropsWithChildren<{}>;

type page = "home" | "sign" | "groceries";

export const CurrentPageContext = createContext<any>("");

export function CurrentPageProvider({ children }: TCurrentPageProvider) {
  const [currentPage, setCurrentPage] = useState<page>("groceries");

  useEffect(() => {
    setCurrentPage(currentPage);
  }, [currentPage]);

  return (
    <CurrentPageContext.Provider value={{ currentPage, setCurrentPage }}>
      {children}
    </CurrentPageContext.Provider>
  );
}
