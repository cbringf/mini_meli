import { NextPage } from "next";
import { Fragment } from "react";
import Template from "../../template";
import { findItems } from "../api/items";
import { ItemEntry } from "../api/items/types";
import EmptyEntryList from "../components/empty-entry-list";
import SearchEntry from "../components/search-entry";

export type SearchPageProps = {
  items: ItemEntry[];
  query?: string;
};

const buildTitle = (query: string | undefined) =>
  `${query || "Search"} | MercadoLibre.com.uy`;

const buildDescription = (query: string | undefined) =>
  `Encontrá ${
    query || "todo"
  } en MercadoLibre.com.uy! Entrá y conocé nuestras increíbles ofertas y promociones. Descubrí la mejor forma de comprar online.`;

const SearchPage: NextPage<SearchPageProps> = ({ items, query }) => {
  return (
    <Template
      query={query}
      title={buildTitle(query)}
      description={buildDescription(query)}
    >
      <Fragment>
        {items &&
          items.map((i) => (
            <SearchEntry
              key={i.id}
              id={i.id}
              title={i.title}
              picture={i.picture}
              price={i.price}
              address={i.address}
            />
          ))}
        {!items && <EmptyEntryList query={query} />}
      </Fragment>
    </Template>
  );
};

export const getServerSideProps = findItems;

export default SearchPage;
