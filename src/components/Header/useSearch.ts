import { useContext } from "react";

// Hook
import useDebounce from "../../hooks/useDebounce";

//Context
import FilterContext from "../../context/filterContext";

export default function useSearch() {
  const debounce = useDebounce();
  const { setSearchValue } = useContext(FilterContext);

  const inputHandler = (inputValue: string) => {
    debounce(() => setSearchValue(inputValue), 500);
  };

  return { inputHandler };
}
