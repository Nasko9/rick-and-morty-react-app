interface ICardImage {
  image: string;
  alt: string;
}

export default function CardImage({ image, alt }: ICardImage) {
  return (
    <img
      className="h-[80%] w-72 rounded-t-lg object-cover"
      src={image}
      alt={alt}
    />
  );
}
