import { Plus } from "phosphor-react";
import { Dispatch, SetStateAction, useState } from "react";
import { supabase } from "../pages/supabaseClient";

interface IAddGroceryInput {
  forceUpdate: number;
  forceUpdateHook: Dispatch<SetStateAction<number>>;
}

export function AddGroceryInput({
  forceUpdate,
  forceUpdateHook,
}: IAddGroceryInput) {
  const [name, setName] = useState<string>("");
  const [amount, setAmount] = useState<number>(1);

  const addNewGrocery = async (_name: string, _amount: number) => {
    try {
      await supabase
        .from("groceries-list")
        .insert({ name: _name, amount: _amount })
        .then(() => null);
    } catch (error) {
      console.log(error);
    } finally {
      setName("");
      setAmount(1);

      forceUpdateHook(forceUpdate + 1);
    }
  };

  return (
    <div className="flex gap-4 text-zinc-200 px-2">
      <input
        className="w-10 bg-zinc-700 py-2 pl-2 rounded-xl"
        value={amount}
        onChange={(e) => setAmount(Number(e.target.value))}
        type="number"
        name=""
        id=""
      />
      <input
        className="bg-zinc-700 p-2 rounded-lg placeholder:text-xs placeholder:font-lg"
        placeholder="Adicionar item à lista de compras"
        value={name}
        onChange={(e) => setName(e.target.value)}
        type="text"
        name=""
        id=""
      />
      <button
        onClick={() => {
          addNewGrocery(name, amount);
        }}
        className="bg-zinc-700 rounded-full p-1 text-zinc-300"
      >
        <Plus size={32} weight="bold" />
      </button>
    </div>
  );
}
