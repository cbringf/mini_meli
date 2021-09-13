import { NextPage } from "next";
import { Fragment } from "react";
import Template from "../../template";
import { getDetails } from "../api/items/local";
import { ItemDetails } from "../api/items/types";
import Slider from "../components/slider";
import styles from "../../styles/Details.module.css";

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
        <div className={styles.flex}>
          <div className={styles.slide}>
            <Slider pictures={details.pictures} />
          </div>
          <div>
            <p className={styles.condition}>
              {details.condition} - {details.soldQuantity} vendidos
            </p>
            <p className={styles.title}>{details.title}</p>
            <p className={styles.price}>$ {details.price.toLocaleString()}</p>
            <button className={styles.buy}>Comprar</button>
          </div>
        </div>
        <div className={styles.flex}>
          <div className={styles["description-container"]}>
            <p className={styles["t-28"]}>Descripción del producto</p>
            <p className={styles.description}>{details.description}</p>
          </div>
          <div></div>
        </div>
      </Fragment>
    </Template>
  );
};

export const getServerSideProps = getDetails;

export default DetailsPage;
