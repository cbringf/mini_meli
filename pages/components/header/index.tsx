import { useState } from "react";

const Header = ({ initialQuery, onQuerySubmit }: any) => {
  const [query, setQuery] = useState(initialQuery || "");

  const handleSearch = () => onQuerySubmit(query);

  return (
    <div style={{ width: "100%", backgroundColor: "#FFE600" }}>
      <input
        style={{ margin: 10 }}
        value={query}
        placeholder="search"
        onChange={(e) => setQuery(e.currentTarget?.value || "")}
      />
      <button onClick={handleSearch} disabled={query.length <= 0}>
        Search
      </button>
    </div>
  );
};

export default Header;
