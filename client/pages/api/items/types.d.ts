import { DetailsPageProps } from "../../items/[id]";

// Models definitions
export type ItemEntry = {
  picture: string;
  price: {
    amount: number;
    currency: string;
  };
  title: string;
  id: string;
  address: string;
};

export type ItemDetails = {
  pictures: string[];
  title: string;
  price: number;
  description: string;
};

// Page properties definitions
export type FindItemsResult = {
  props: SearchPageProps;
};

export type GetDetailsResult = {
  props: DetailsPageProps;
};
