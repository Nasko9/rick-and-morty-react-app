import React from "react";

// Components
import Card from "./Card";
import Skeleton from "./Skeleton";
import ErrorMessage from "../ErrorMessage";

// Hook
import useCharacters from "./useCharacters";

export default function Characters() {
  const { data, isLoading, status } = useCharacters();
  return (
    <>
      <div className="grid justify-items-center gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
        {isLoading ? (
          <Skeleton />
        ) : (
          data?.pages.map((group, i) => (
            <React.Fragment key={i}>
              {group.data.results.map((character: any) => (
                <Card key={character.id} {...character} />
              ))}
            </React.Fragment>
          ))
        )}
      </div>
      {status === "error" && <ErrorMessage />}
    </>
  );
}
