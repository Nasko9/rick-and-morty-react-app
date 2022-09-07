import { useContext, useEffect } from "react";
import { useInfiniteQuery } from "react-query";

// Api
import fetchCharacters from "../../api/characters";

// Context
import FilterContext from "../../context/filterContext";

export default function useCharacters() {
  const { filterValue, searchValue } = useContext(FilterContext);

  const { data, hasNextPage, fetchNextPage, status, isFetching } =
    useInfiniteQuery(
      ["characters", filterValue, searchValue],
      (queryContext) =>
        fetchCharacters(queryContext.pageParam, filterValue, searchValue),
      {
        getNextPageParam: (_lastPage, allPages) => {
          if (allPages.length < allPages[0].data.info.pages) {
            return allPages.length + 1;
          }
          return undefined;
        },
      }
    );

  useEffect(() => {
    const onScroll = () => {
      if (document.scrollingElement) {
        const { scrollHeight, scrollTop, clientHeight } =
          document.scrollingElement;

        if (
          !isFetching &&
          scrollHeight - scrollTop <= clientHeight * 1.5 &&
          hasNextPage
        ) {
          fetchNextPage();
        }
      }
    };

    document.addEventListener("scroll", onScroll);

    return () => {
      document.removeEventListener("scroll", onScroll);
    };
  }, [fetchNextPage, hasNextPage, isFetching]);

  return {
    data,
    status,
  };
}
