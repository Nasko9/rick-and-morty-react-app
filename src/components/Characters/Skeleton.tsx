function SkeletonCard() {
  return (
    <div className="mb-5 h-80 w-72 animate-pulse select-none justify-items-center rounded-lg shadow-md">
      <div className="h-[80%] w-auto rounded-t-lg bg-slate-400"></div>
      <div className="flex h-[20%] items-center rounded-b-lg bg-white pl-6 ">
        <div className="h-5 w-36 rounded-md bg-slate-400"></div>
      </div>
    </div>
  );
}

export default function Skeleton() {
  const cardList = [];

  for (let i = 0; i < 20; i++) {
    cardList.push(<SkeletonCard key={i} />);
  }

  return (
    <div className="grid justify-items-center gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
      {cardList}
    </div>
  );
}
