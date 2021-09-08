import { useState } from "react";
import styles from "../../../styles/Header.module.css";

const Header = ({ initialQuery, onQuerySubmit }: any) => {
  const [query, setQuery] = useState(initialQuery || "");

  const handleSearch = () => onQuerySubmit(query);

  return (
    <div className={styles.container}>
      <div className={styles["search-box"]}>
        <div className={styles.logo}>
          <img src="/Logo.png" />
        </div>
        <input
          className={styles.input}
          value={query}
          placeholder="Nunca dejes de buscar"
          onChange={(e) => setQuery(e.currentTarget?.value || "")}
        />
        <button
          className={styles.submit}
          onClick={handleSearch}
          disabled={query.length <= 0}
        >
          <img src="/search_icon.png" />
        </button>
      </div>
    </div>
  );
};

export default Header;
