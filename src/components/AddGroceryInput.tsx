import { Plus } from "phosphor-react";
import { useState } from "react";

export function AddGroceryInput() {

    const [amount, setAmount] = useState<number>(1);

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
      <input className="bg-zinc-700 p-2 rounded-lg placeholder:text-xs placeholder:font-lg" placeholder="Adicionar item à lista de compras" type="text" name="" id="" />
      <button className="bg-zinc-700 rounded-full p-1 text-zinc-300">
        <Plus size={32} weight="bold" />
      </button>
    </div>
  );
}
