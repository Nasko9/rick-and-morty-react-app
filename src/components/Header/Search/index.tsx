// Type
interface ISearch {
  inputHandler: (inputValue: string) => void;
}

export default function Search({ inputHandler }: ISearch) {
  return (
    <input
      type="text"
      id="search"
      name="search"
      placeholder="Search"
      className="h-10 rounded-lg border-2 px-3 focus:outline-none"
      onChange={(e) => inputHandler(e.target.value)}
    />
  );
}
