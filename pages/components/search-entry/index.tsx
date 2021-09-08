import Link from "next/link";
import styles from "../../../styles/SearchEntry.module.css";

const SearchEntry = ({ id, title, picture, price, address }: any) => {
  const url = "/items/";
  return (
    <div className={styles.entry}>
      <Link href={`${url}${id}`}>
        <a>
          <img
            style={{
              borderRadius: 4,
              margin: 16,
            }}
            src={picture}
            height="180"
            width="180"
          />
        </a>
      </Link>
      <div className={styles.info}>
        <p>$ {price.toLocaleString()}</p>
        <Link href={`${url}${id}`}>
          <a>
            <p
              style={{
                color: "#666666",
                height: 18,
                fontFamily:
                  "Proxima Nova,-apple-system,Helvetica Neue,Helvetica,Roboto,Arial,sans-serif",
                marginTop: 32,
              }}
            >
              {title}
            </p>
          </a>
        </Link>
      </div>
      <p>{address}</p>
    </div>
  );
};

export default SearchEntry;
