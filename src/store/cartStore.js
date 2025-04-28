import { create } from "zustand";

import {devtools, persist} from 'zustand/middleware'

const cartStore = (set, get)=>({
    products:[],

    addToCart:(product) =>{
        const curr = get().products   // we can also get current product with state prop inside set function

        const exists = curr.some((item)=> item.id == product.id)

        if(exists) {
            const updatedProducts = curr.map((item)=> item.id==product.id ? {...item, quantity: item.quantity+1}: item)
            set((state)=>({
                products: updatedProducts
            }))
        }else{
             set((state) => ({
               products: [{...product, quantity:1}, ...state.products],
             }));

        }
       
    },

    removeFromCart: (productId) => {
        set((state)=>({
            products: state.products.filter((product)=> product.id!=productId)
        }))
    },

    decreaseQuantity: (productId) =>{
        const updated = get()
          .products.map((p) =>
            p.id === productId
              ? p.quantity > 1
                ? { ...p, quantity: p.quantity - 1 }
                : null
              : p
          )
          .filter(Boolean);

        set({ products: updated });

    }

    
})


const useCartStore = create(
    devtools(
        persist(cartStore,{
            name: "cartProducts"
        })
    )
)


export default useCartStore;