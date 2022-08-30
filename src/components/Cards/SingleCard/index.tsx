interface ISingleCard {
  name: string;
}

export default function SingleCard({ name }: ISingleCard) {
  return (
    <div className="justify-items-centerrounded-lg mb-5 h-80 w-72 select-none shadow-md">
      <div className="h-[80%] w-auto rounded-t-lg bg-slate-400"></div>
      <div className="flex h-[20%] items-center rounded-b-lg bg-white pl-6 ">
        <h1 className="font-semibold">{name}</h1>
      </div>
    </div>
  );
}
