import { create } from 'zustand';

const useFavoriteStore = create((set) => ({
  favorites: [],
  isFavoriteOpen: false,
  setIsFavoriteOpen: (isOpen) => set({ isFavoriteOpen: isOpen }),
  addToFavorites: (product) => 
    set((state) => ({
      favorites: [...state.favorites, product]
    })),
  removeFromFavorites: (productId) =>
    set((state) => ({
      favorites: state.favorites.filter(item => item.id !== productId)
    })),
}));

export default useFavoriteStore;