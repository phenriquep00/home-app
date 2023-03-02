import { AddGroceryInput } from "../components/AddGroceryInput";
import { GroceryList } from "../components/GroceryList";

export function Groceries() {
  return (
    <div className="flex flex-col w-full h-full items-center justify-between py-4">
      <h1 className="font-bold text-2xl text-zinc-300">Lista de compras</h1>
      <GroceryList />
      <AddGroceryInput />
    </div>
  );
}
