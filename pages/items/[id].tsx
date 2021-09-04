import { NextPage, NextPageContext } from "next";
import MeliTemplate from "../../template";

const Details: NextPage = ({ item }: any) => {
  return (
    <MeliTemplate>
      <p>Page Details</p>
    </MeliTemplate>
  );
};

export async function getServerSideProps(context: NextPageContext) {
  return {
    props: {
      item: {},
    },
  };
}
