interface IGroceryItem {
  name: string;
  amount: number;
}

export function GroceryItem({ name, amount }: IGroceryItem) {
  return (
    <div className="flex gap-2 w-[80%] rounded-md pl-5 items-center h-8 bg-zinc-900 text-zinc-300">
        <div className="font-bold text-xl">{amount}</div>
        <div className="font-medium text-lg">{name}</div>
    </div>
  );
}
