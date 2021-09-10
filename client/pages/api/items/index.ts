// Use this functions to load directly from MELI

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
    `${process.env.API_HOST}/sites/MLA/search?q=${context.query?.search || ""}`
  );
  const jsonResponse = await response.json();

  return {
    props: {
      items: jsonResponse.results?.map((item: any) => ({
        id: item.id,
        title: item.title,
        picture: item.thumbnail,
        price: item.price.amount,
        address: item.address.state_name,
      })),
      query: context.query.search,
    },
  };
}

export async function getDetails(
  context: NextPageContext
): Promise<GetDetailsResult> {
  const apiUrl = `${process.env.API_HOST}/items/${context.query.id}`;

  const responses = await Promise.all([
    fetch(apiUrl),
    fetch(`${apiUrl}/description`),
  ]);
  const itemResult = await responses[0].json();
  const itemDescResult = await responses[1].json();

  return {
    props: {
      details: {
        title: itemResult.title,
        price: itemResult.price,
        description: itemDescResult.plain_text,
        pictures: itemResult.pictures.map((p: any) => p.url),
      },
    },
  };
}
