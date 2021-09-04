import { NextPage, NextPageContext } from "next";
import MeliTemplate from "../../template";

const Search: NextPage = ({ items }: any) => {
  return (
    <MeliTemplate>
      {items.map((i: any) => (
        <p>{i.title}</p>
      ))}
    </MeliTemplate>
  );
};

export async function getServerSideProps(context: NextPageContext) {
  const response = await fetch(
    "https://api.mercadolibre.com/sites/MLA/search?q=celu"
  );
  const jsonResponse = await response.json();

  return {
    props: {
      items: jsonResponse.results,
    },
  };
}

export default Search;
