// Components
import CardImage from "./CardImage";
import CardTitle from "./CardTitle";

// Type
interface ICard {
  name: string;
  image: string;
}

export default function Card({ name, image }: ICard) {
  return (
    <div className="mb-5 h-80 w-72 select-none justify-items-center rounded-lg shadow-md">
      <CardImage image={image} />
      <CardTitle title={name} />
    </div>
  );
}
