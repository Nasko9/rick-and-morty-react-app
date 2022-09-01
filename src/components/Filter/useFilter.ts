import { useContext } from "react";

// Context
import FilterContext from "./filterContext";

// Hook
export default function useFilter() {
  const { filterValue, setFilterValue } = useContext(FilterContext);

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilterValue(e.target.value);
  };

  return { onChangeHandler, filterValue };
}
