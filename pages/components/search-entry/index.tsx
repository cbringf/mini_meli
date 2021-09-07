import Link from "next/link";

const SearchEntry = ({ id, title, picture, price }: any) => {
  const url = "/items/";
  return (
    <div
      style={{
        display: "flex",
        borderBottom: "1px solid #EEEEEE",
      }}
    >
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
      <div>
        <p
          style={{
            color: "#333333",
            fontFamily:
              "Proxima Nova,-apple-system,Helvetica Neue,Helvetica,Roboto,Arial,sans-serif",
          }}
        >
          $ {price.toLocaleString()}
        </p>
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
    </div>
  );
};

export default SearchEntry;
