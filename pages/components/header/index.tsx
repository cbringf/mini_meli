import { useEffect, useState } from "react";
import Link from "next/link";
import styles from "../../../styles/Header.module.css";

const Header = ({ initialQuery, onQuerySubmit }: any) => {
  const [query, setQuery] = useState(initialQuery || "");

  const handleSearch = () => onQuerySubmit(query);

  useEffect(() => {
    setQuery(initialQuery || "");
  }, [initialQuery]);

  return (
    <div className={styles.container}>
      <div className={styles["search-box"]}>
        <div className={styles.logo}>
          <Link href="/items">
            <a>
              <img src="/Logo.png" />
            </a>
          </Link>
        </div>
        <input
          className={styles.input}
          value={query}
          placeholder="Nunca dejes de buscar"
          onChange={(e) => setQuery(e.currentTarget?.value || "")}
        />
        <button className={styles.submit} onClick={handleSearch}>
          <img src="/search_icon.png" />
        </button>
      </div>
    </div>
  );
};

export default Header;
