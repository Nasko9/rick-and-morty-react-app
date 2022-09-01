import { Dispatch, SetStateAction } from "react";
import { createContext, useState } from "react";

// Type
interface IFilterValueContext {
  filterValue: string;
  setFilterValue: Dispatch<SetStateAction<string>>;
  searchValue: string;
  setSearchValue: Dispatch<SetStateAction<string>>;
}

interface IRadioContextProvider {
  children: JSX.Element;
}

// Initial State
const initialStateContext = {
  filterValue: "",
  setFilterValue: () => {},
  searchValue: "",
  setSearchValue: () => {},
};

// CreateContext
const FilterContext = createContext<IFilterValueContext>(initialStateContext);

// Context Provider
export function FilterContextProvider({ children }: IRadioContextProvider) {
  const [filterValue, setFilterValue] = useState("");
  const [searchValue, setSearchValue] = useState("");

  return (
    <FilterContext.Provider
      value={{ filterValue, setFilterValue, searchValue, setSearchValue }}
    >
      {children}
    </FilterContext.Provider>
  );
}

export default FilterContext;
