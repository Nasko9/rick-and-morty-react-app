interface ICardImage {
  image: string;
}

export default function CardImage({ image }: ICardImage) {
  return <img className="h-[80%] w-72 rounded-t-lg object-cover" src={image} />;
}
