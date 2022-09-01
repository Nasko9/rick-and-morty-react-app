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
    <div className="flex items-center justify-center gap-1 accent-[#495464]">
      <input
        type="radio"
        id={value}
        value={value}
        name="select"
        onChange={onSelect}
        checked={filterValue === value}
      />
      <label htmlFor={value}>{placeholder}</label>
    </div>
  );
}
