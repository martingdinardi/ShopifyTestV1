import { shopifyFetch } from "./shopifyConfig";

export async function getProducts(): Promise<ShopifyProduct[]> {
  const query = `
    query {
      products(first: 10) {
        edges {
          node {
            id
            title
            handle
            description
            images(first: 2) {
              edges {
                node {
                  originalSrc
                  altText
                }
              }
            }
            priceRange {
              minVariantPrice {
                amount
              }
            }
          }
        }
      }
    }
  `;

  const response = await shopifyFetch<ShopifyProductsResponse>({ query });
  return response.products.edges.map((edge) => edge.node);
}
