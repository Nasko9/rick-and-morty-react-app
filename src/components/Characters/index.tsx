import React from "react";

// Components
import Card from "./Card";
import Skeleton from "./Skeleton";
import ErrorMessage from "../ErrorMessage";

// Hook
import useCharacters from "./useCharacters";

// Types
import { ICharacter } from "../../api/characters/types";

export default function Characters() {
  const { data, status } = useCharacters();

  if (status === "loading") {
    return <Skeleton />;
  }

  if (status === "error") {
    return <ErrorMessage />;
  }

  return (
    <div className="grid justify-items-center gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
      {data?.pages.map((group, i) => (
        <React.Fragment key={i}>
          {group.data.results.map((character: ICharacter) => (
            <Card key={character.id} {...character} />
          ))}
        </React.Fragment>
      ))}
    </div>
  );
}
