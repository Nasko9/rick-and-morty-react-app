import { Dispatch, SetStateAction } from "react";
import { createContext, useState } from "react";

// Type
interface IFilterValueContext {
  filterValue: string;
  setFilterValue: Dispatch<SetStateAction<string>>;
}

interface IRadioContextProvider {
  children: JSX.Element;
}

// Initial State
const initialStateContext = {
  filterValue: "",
  setFilterValue: () => {},
};

// CreateContext
const FilterContext = createContext<IFilterValueContext>(initialStateContext);

// Context Provider
export function FilterContextProvider({ children }: IRadioContextProvider) {
  const [filterValue, setFilterValue] = useState("");

  return (
    <FilterContext.Provider value={{ filterValue, setFilterValue }}>
      {children}
    </FilterContext.Provider>
  );
}

export default FilterContext;
