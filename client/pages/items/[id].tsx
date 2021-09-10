import { NextPage } from "next";
import { Fragment } from "react";
import Template from "../../template";
import { getDetails } from "../api/items/local";
import { ItemDetails } from "../api/items/types";
import Slider from "../components/slider";

export type DetailsPageProps = {
  details: ItemDetails;
};

const buildTitle = (itemTitle: string) => `${itemTitle} | Mercado Libre`;

const DetailsPage: NextPage<DetailsPageProps> = ({ details }) => {
  return (
    <Template
      title={buildTitle(details.title)}
      description={details.description}
    >
      <Fragment>
        <div>
          <div>
            <Slider pictures={details.pictures} />
          </div>
          <div>
            <p>{details.title}</p>
            <p>{details.price}</p>
          </div>
        </div>
        <div>
          <p>Descripción del producto</p>
          <p>{details.description}</p>
        </div>
      </Fragment>
    </Template>
  );
};

export const getServerSideProps = getDetails;

export default DetailsPage;
