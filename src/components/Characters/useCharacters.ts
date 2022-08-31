import { useInfiniteQuery } from "react-query";

// Api
import axios from "../../api/axiosInstance";

// Type
// interface ICharacter {
//   id: number;
//   name: string;
//   status: string;
//   image: string;
// }

const fetchCharacters = ({ pageParam = 1 }) => {
  return axios.get(`/character/?page=${pageParam}`);
};

export default function useCharacters() {
  const { isLoading, data, hasNextPage, fetchNextPage } = useInfiniteQuery(
    "characters",
    fetchCharacters,
    {
      getNextPageParam: (_lastPage, pages) => {
        if (pages.length < 42) {
          return pages.length + 1;
        } else {
          return undefined;
        }
      },
    }
  );

  return {
    data,
    isLoading,
    hasNextPage,
    fetchNextPage,
  };
}
