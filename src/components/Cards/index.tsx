import SingleCard from "./SingleCard";

const cardData = [
  { name: "Eli's Girlfriend" },
  { name: "Jaguar" },
  { name: "Council of Glorzos Member" },
  { name: "Steve" },
  { name: "Xing Ho" },
  { name: "Space Cruiser" },
];

export default function Cards() {
  return (
    <div className="grid justify-items-center gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
      {cardData.map(({ name }) => (
        <SingleCard name={name} />
      ))}
    </div>
  );
}