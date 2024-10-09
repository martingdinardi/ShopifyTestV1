import { getProducts } from "./lib/getProducts";
import ProductGallery from "./components/ProductGallery";
import { Inter } from "next/font/google";
import Header from "./components/Header";
import Cart from "./components/Cart";
import { Toaster } from "sonner";
const inter = Inter({ subsets: ["latin"] });

export default async function Home() {
  const products = await getProducts();

  return (
    <div className={inter.className}>
      <Header products={products} />
      <ProductGallery products={products} title="Featured Collection" />
      <Cart />
      <Toaster richColors={true} />
    </div>
  );
}
