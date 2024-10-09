interface ShopifyImage {
  originalSrc: string;
  altText: string | null;
}

interface ShopifyProduct {
  id: string;
  title: string;
  handle: string;
  description: string;
  images: {
    edges: Array<{
      node: ShopifyImage;
    }>;
  };
  priceRange: {
    minVariantPrice: {
      amount: string;
    };
  };
}

interface ShopifyProductsResponse {
  products: {
    edges: Array<{
      node: ShopifyProduct;
    }>;
  };
}
