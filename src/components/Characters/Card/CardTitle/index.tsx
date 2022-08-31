interface ICardTitle {
  title: string;
}

export default function CardTitle({ title }: ICardTitle) {
  return (
    <div className="flex h-[20%] items-center rounded-b-lg bg-white pl-6 ">
      <h1 className="font-semibold">{title}</h1>
    </div>
  );
}
