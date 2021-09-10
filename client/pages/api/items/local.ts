// Use this functions to use mini-meli-api

// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextPageContext } from "next";
import { FindItemsResult, GetDetailsResult } from "./types";

export async function findItems(
  context: NextPageContext
): Promise<FindItemsResult> {
  if (!context.query?.search) {
    return {
      props: {
        items: null,
        query: "",
      },
    };
  }

  const response = await fetch(
    `${process.env.LOCAL_API_HOST}/api/items?q=${context.query?.search || ""}`
  );
  const jsonResponse = await response.json();

  return {
    props: {
      items: jsonResponse.items,
      query: context.query.search,
    },
  };
}

export async function getDetails(
  context: NextPageContext
): Promise<GetDetailsResult> {
  const apiUrl = `${process.env.LOCAL_API_HOST}/api/items/${context.query.id}`;

  const response = await fetch(apiUrl);
  const itemResult = await response.json();

  console.log(itemResult);

  return {
    props: {
      details: {
        title: itemResult.item.title,
        price: itemResult.item.price.amount,
        description: itemResult.item.description,
        pictures: [itemResult.item.picture],
      },
    },
  };
}
