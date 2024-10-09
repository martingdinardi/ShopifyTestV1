import { GraphQLClient } from "graphql-request";

const domain = process.env.SHOPIFY_STORE_DOMAIN;
const storefrontAccessToken = process.env.SHOPIFY_STOREFRONT_ACCESS_TOKEN;

if (!domain || !storefrontAccessToken) {
  throw new Error("Shopify environment variables are not set");
}

export const shopifyClient = new GraphQLClient(
  `https://${domain}/api/2023-07/graphql.json`,
  {
    headers: {
      "X-Shopify-Storefront-Access-Token": storefrontAccessToken,
      "Content-Type": "application/json",
    },
  }
);

export async function shopifyFetch<T>({
  query,
  variables,
}: {
  query: string;
  variables?: any;
}): Promise<T> {
  try {
    return await shopifyClient.request<T>(query, variables);
  } catch (error) {
    console.error("Error:", error);
    throw new Error("Unable to fetch data from Shopify");
  }
}
