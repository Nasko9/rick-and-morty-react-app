// Components
import Card from "./Card";
import Skeleton from "./Skeleton";

// Hook
import useCharacters from "./useCharacters";

export default function Characters() {
  const { characters } = useCharacters();

  return (
    <div className="grid justify-items-center gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
      {characters &&
        characters.map((character) => (
          <Card key={character.id} {...character} />
        ))}
      {!characters.length && <Skeleton />}
    </div>
  );
}
