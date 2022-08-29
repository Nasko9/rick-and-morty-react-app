interface ISingleCard {
  name: string;
}

export default function SingleCard({ name }: ISingleCard) {
  return (
    <div className="mb-5 h-80 basis-1/5 select-none rounded-lg bg-white shadow-md">
      <div className="h-[80%] w-auto rounded-t-lg bg-slate-500"></div>
      <div className="flex h-[20%] items-center pl-6"> {name}</div>
    </div>
  );
}
