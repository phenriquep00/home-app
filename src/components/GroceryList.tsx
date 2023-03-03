import { Key, useEffect, useState } from "react";
import { supabase } from "../pages/supabaseClient";
import { GroceryItem } from "./GroceryItem";

interface IGroceryList {
  forceUpdate: number;
}

export function GroceryList({forceUpdate}: IGroceryList) {
  const [groceryList, setGroceryList] = useState<any>(null);

  const fetchGroceryList = async () => {
    await supabase
      .from("groceries-list")
      .select("*")
      .then(({ data }) => {
        setGroceryList(data!);
      });
  };

  useEffect(() => {
    fetchGroceryList();
  }, [forceUpdate]);

  /* useEffect(() => {console.log(groceryList)}, [groceryList]) */

  return (
    <ul className="flex flex-col items-center p-2 gap-3 h-[80%] w-[90%] bg-zinc-800 rounded-md">
      {groceryList !== null &&
        groceryList.map(
          (grocery: {
            id: Key | null | undefined;
            name: string;
            amount: number;
          }) => {
            return (
              <GroceryItem
                key={grocery.id}
                name={grocery.name}
                amount={grocery.amount}
              />
            );
          }
        )}
    </ul>
  );
}
