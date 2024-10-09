import { getProducts } from "./lib/getProducts";
import ProductGallery from "./components/ProductGallery";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });

export default async function Home() {
  const products = await getProducts();

  return (
    <div className={inter.className}>
      <ProductGallery products={products} title="Featured Collection" />
    </div>
  );
}
