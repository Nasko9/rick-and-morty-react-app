// Type
interface IFilterElement {
  placeholder: string;
  value: string;
  onSelect: (e: React.ChangeEvent<HTMLInputElement>) => void;
  filterValue: string;
}

export default function FilterElement({
  placeholder,
  value,
  onSelect,
  filterValue,
}: IFilterElement) {
  return (
    <div className="flex cursor-pointer items-center justify-center gap-1 accent-[#495464]">
      <input
        className="cursor-pointer "
        type="radio"
        id={placeholder}
        value={value}
        name="select"
        onChange={onSelect}
        checked={filterValue === value}
      />
      <label htmlFor={placeholder} className="cursor-pointer">
        {placeholder}
      </label>
    </div>
  );
}
