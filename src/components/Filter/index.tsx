// Component
import FilterElement from "./FilterElement";
import useFilter from "./useFilter";

// Select data
const selectElements = [
  { placeholder: "Any", value: "" },
  { placeholder: "Alive", value: "alive" },
  { placeholder: "Dead", value: "dead" },
  { placeholder: "Unknown", value: "unknown" },
];

export default function Filter() {
  const { onChangeHandler, filterValue } = useFilter();

  return (
    <div className="mb-8 flex flex-wrap">
      <p>Character status: &nbsp;</p>
      <div className="flex gap-3 ">
        {selectElements.map(({ placeholder, value }) => (
          <FilterElement
            key={value}
            placeholder={placeholder}
            value={value}
            onSelect={onChangeHandler}
            filterValue={filterValue}
          />
        ))}
      </div>
    </div>
  );
}
