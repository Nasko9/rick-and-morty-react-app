export default function Search({ inputHandler }: any) {
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
