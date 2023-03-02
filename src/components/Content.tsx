import { useContext } from "react";
import { CurrentPageContext } from "../hooks/useCurrentPage";
import { Groceries } from "../pages/Groceries";
import { Home } from "../pages/Home";

export function Content() {
  const { currentPage, setCurrentPage } = useContext(CurrentPageContext);

  return (
    <main className="flex w-screen bg-gradient-to-b from-zinc-800 via-zinc-500 to-zinc-900 h-screen mb-14 items-center justify-center">
      {currentPage === "groceries" ? (
        <Groceries />
      ) : currentPage === "home" ? (
        <Home />
      ) : null}
    </main>
  );
}
