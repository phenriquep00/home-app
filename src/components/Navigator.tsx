import { DotsThree, House, ShoppingCartSimple } from "phosphor-react";
import { useContext } from "react";
import { CurrentPageContext } from "../hooks/useCurrentPage";

export function Navigator() {

    const {currentPage, setCurrentPage} = useContext(CurrentPageContext);

  return (
    <nav className="fixed flex bg-zinc-800 items-center justify-center w-full h-[12%] bottom-0 border-t border-t-zinc-500 rounded">
      <ul className="flex justify-evenly w-full">
        <li>
          <button onClick={() => setCurrentPage("home")} className="flex items-center justify-center">
            <House size={32} weight="thin" />
          </button>
        </li>
        <li>
          <button onClick={() => setCurrentPage("groceries")} className="flex items-center justify-center">
            <ShoppingCartSimple size={32} weight="thin" />
          </button>
        </li>
        <li>
          <button className="flex items-center justify-center">
            <DotsThree size={32} weight="bold" />
          </button>
        </li>
      </ul>
    </nav>
  );
}
