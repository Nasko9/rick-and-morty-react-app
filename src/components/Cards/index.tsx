import SingleCard from "./SingleCard";

const cardData = [
  { name: "Eli's Girlfriend" },
  { name: "Jaguar" },
  { name: "Council of Glorzos Member" },
  { name: "Steve" },
  { name: "Xing Ho" },
  { name: "space Cruiser" },
];

export default function Cards() {
  return (
    <div className="">
      <div className="flex flex-wrap gap-10">
        {cardData.map(({ name }) => (
          <SingleCard name={name} />
        ))}
      </div>
    </div>
  );
}
