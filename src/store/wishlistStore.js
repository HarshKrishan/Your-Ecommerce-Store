import { create } from "zustand";

import {devtools, persist} from 'zustand/middleware'

const wishlistStore = (set)=>({
    products:[],
    addProduct:(product) =>{
        
        
        set((state)=> ({
            products: [product, ...state.products]
        }))
    },
    removeProduct: (productId) => {
        set((state)=>({
            products: state.products.filter((product)=> product.id!=productId)
        }))
    }
})


const useWishlistStore = create(
  devtools(
    persist(wishlistStore, {
      name: "wishlistProducts",
    //   onRehydrateStorage: () => (state) => {
    //     console.log("✅ Hydrated from storage", state.products);

    //     // Manually update devtools after hydration
    //     setTimeout(() => {
    //       if (
    //         typeof window !== "undefined" &&
    //         window.__REACT_DEVTOOLS_GLOBAL_HOOK__
    //       ) {
    //         // Force devtools to show hydrated state
    //         const currentState = state.products;
    //         useWishlistStore.setState(
    //           { products: currentState },
    //           false,
    //           "wishlist/hydrated"
    //         );
    //       }
    //     }, 0);
    //   },
    })
  )
);


export default useWishlistStore;