import { useEffect } from "react";
import { useInfiniteQuery } from "react-query";

// Api
import axios from "../../api/axiosInstance";

// Function for fetching all data
const fetchCharacters = ({ pageParam = 1 }) => {
  return axios.get(`/character/?page=${pageParam}`);
};

// Custom hook
export default function useCharacters() {
  const { isLoading, data, hasNextPage, fetchNextPage } = useInfiniteQuery(
    "characters",
    fetchCharacters,
    {
      getNextPageParam: (_lastPage, pages) => {
        if (pages.length < pages[0].data.info.pages) {
          return pages.length + 1;
        } else {
          return undefined;
        }
      },
    }
  );

  useEffect(() => {
    let fetching = false;

    const onScroll = async (event: any) => {
      const { scrollHeight, scrollTop, clientHeight } =
        event.target.scrollingElement;

      if (!fetching && scrollHeight - scrollTop <= clientHeight * 1.5) {
        fetching = true;
        if (hasNextPage) fetchNextPage();
        fetching = false;
      }
    };

    document.addEventListener("scroll", onScroll);

    return () => {
      document.removeEventListener("scroll", onScroll);
    };
  }, [fetchNextPage, hasNextPage]);

  return {
    data,
    isLoading,
  };
}
