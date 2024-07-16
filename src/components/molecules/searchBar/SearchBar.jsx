import { Input } from "../../atoms";

export const SearchBar = () => {
  return (
    <div className="search-bar">
    <div className="search-input-wrapper">
      <Input
        type="text"
        className="search-input"
        placeholder="Search your book..."
      />
      <div className="search-icon">
        <img src="assets/searchbar/search.png" alt="Search" />
      </div>
    </div>
    <div className="language-selector">
        <span>EN</span>
        <img src="assets/searchbar/flag.png" alt="English" className="flag-icon" />
    </div>
  </div>
  );
};
