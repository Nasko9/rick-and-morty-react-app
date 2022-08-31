function SkeletonCard() {
  return (
    <div className="mb-5 h-80 w-72 animate-pulse select-none justify-items-center rounded-lg shadow-md">
      <div className="h-[80%] w-auto rounded-t-lg bg-slate-400"></div>
      <div className="flex h-[20%] items-center rounded-b-lg bg-white pl-6 ">
        <h1 className="h-5 w-36 rounded-md bg-slate-400"></h1>
      </div>
    </div>
  );
}

export default function Skeleton() {
  const cardList = [];

  for (let i = 0; i < 20; i++) {
    cardList.push(<SkeletonCard key={i} />);
  }

  return <>{cardList}</>;
}
