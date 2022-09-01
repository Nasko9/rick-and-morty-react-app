// Components
import Logo from "./Logo";
import Search from "./Search";

// Hook
import useSearch from "./useSearch";

export default function Header() {
  const { inputHandler } = useSearch();

  return (
    <div className="flex items-center justify-between ">
      <Logo />
      <Search inputHandler={inputHandler} />
    </div>
  );
}
