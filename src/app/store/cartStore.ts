import { create } from "zustand";

interface ProductStore {
  cartItems: CartItem[];
  addToCart: (product: ShopifyProduct) => void;
  removeFromCart: (productId: string) => void;
  isModalOpen: boolean;
  setIsModalOpen: (isOpen: boolean) => void;
  getTotalAmount: () => number;
  getTotalItems: () => number;
}

const useProductStore = create<ProductStore>((set, get) => ({
  cartItems: [],
  addToCart: (product) =>
    set((state) => {
      const existingItem = state.cartItems.find(
        (item) => item.id === product.id
      );
      if (existingItem) {
        return {
          cartItems: state.cartItems.map((item) =>
            item.id === product.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          ),
        };
      } else {
        return { cartItems: [...state.cartItems, { ...product, quantity: 1 }] };
      }
    }),
  removeFromCart: (productId) =>
    set((state) => ({
      cartItems: state.cartItems.filter((item) => item.id !== productId),
    })),
  isModalOpen: false,
  setIsModalOpen: (isOpen) => set(() => ({ isModalOpen: isOpen })),
  getTotalAmount: () => {
    return get().cartItems.reduce((total, item) => {
      const price = parseFloat(item.priceRange.minVariantPrice.amount);
      return total + price * item.quantity;
    }, 0);
  },
  getTotalItems: () => {
    return get().cartItems.reduce((total, item) => total + item.quantity, 0);
  },
}));

export default useProductStore;
