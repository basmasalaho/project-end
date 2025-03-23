import { create } from 'zustand';

const useCartStore = create((set, get) => ({
  cart: [],
  isCartOpen: false,

  addToCart: (product) => {
    set((state) => {
      const existingProduct = state.cart.find(item => item.id === product.id);
      
      if (existingProduct) {
        const updatedCart = state.cart.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
        return { cart: updatedCart };
      }
      return { cart: [...state.cart, { ...product, quantity: 1 }] };
    });
  },

  removeFromCart: (productId) => {
    set((state) => ({
      cart: state.cart.filter(item => item.id !== productId)
    }));
  },

  updateQuantity: (productId, newQuantity) => {
    set((state) => ({
      cart: state.cart.map(item =>
        item.id === productId
          ? { ...item, quantity: Math.max(1, newQuantity) } // لا يسمح بأن يكون أقل من 1
          : item
      ),
    }));
  },

  getUniqueItemsCount: () => get().cart.length,

  setIsCartOpen: (value) => set({ isCartOpen: value }),

  getTotalPrice: () => get().cart.reduce(
    (total, item) => total + (item.price * item.quantity), 
    0
  ),
}));

export default useCartStore;
