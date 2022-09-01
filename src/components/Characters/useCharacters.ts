import { useContext, useEffect } from "react";
import { useInfiniteQuery } from "react-query";

// Api
import fetchCharacters from "../../api/characters";

// Context
import FilterContext from "../../context/filterContext";

export default function useCharacters() {
  const { filterValue, searchValue } = useContext(FilterContext);

  const { isLoading, data, hasNextPage, fetchNextPage, status } =
    useInfiniteQuery(
      ["characters", filterValue, searchValue],
      () => fetchCharacters(1, filterValue, searchValue),
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

    const onScroll = async () => {
      if (document.scrollingElement) {
        const { scrollHeight, scrollTop, clientHeight } =
          document.scrollingElement;

        if (!fetching && scrollHeight - scrollTop <= clientHeight * 1.5) {
          fetching = true;
          if (hasNextPage) fetchNextPage();
          fetching = false;
        }
      }
    };

    document.addEventListener("scroll", onScroll);

    return () => {
      document.removeEventListener("scroll", onScroll);
    };
  }, [fetchNextPage, hasNextPage, filterValue]);

  return {
    data,
    isLoading,
    status,
  };
}
