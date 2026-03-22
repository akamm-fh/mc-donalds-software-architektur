import { Product } from "@/data/products"
import { create } from "zustand"
import { persist } from "zustand/middleware"

export type CartItem = {
    id: string,
    amount: number,
    product: Product,
}

type CartStore = {
    items: CartItem[]
    addItem: (amount: number, product: Product) => void,
    removeItem: (id: string) => void,
    increaseAmount: (id: string) => void,
    decreaseAmount: (id: string) => void,
    clearCart: () => void,
}

export const useCartStore = create<CartStore>()(
    persist(
        (set) => ({
            items: [],

            clearCart: () => {
                set(() => ({items: []}))
            },

            increaseAmount: (id) => {
                set((state) => ({
                    items: state.items.map(i =>
                        i.id === id
                            ? { ...i, amount: i.amount + 1 }
                            : i
                    )
                }));
            },

            decreaseAmount: (id) => {
                set((state) => ({
                    items: state.items
                        .map(i =>
                            i.id === id
                                ? { ...i, amount: i.amount - 1 }
                                : i
                        )
                        .filter(i => i.amount > 0)
                }));
            },

            addItem: (amount, product) => {
                set((state) => {
                    const existingItem = state.items.find(i => i.product.id === product.id);

                    if (existingItem) {
                        return {
                            items: state.items.map(i =>
                                i.product.id === product.id
                                    ? { ...i, amount: i.amount + amount }
                                    : i
                            )
                        };
                    }

                    return {
                        items: [
                            ...state.items,
                            {
                                id: crypto.randomUUID(),
                                amount,
                                product
                            }
                        ]
                    };
                });
            },

            removeItem: (id) =>
                set((state) => ({
                    items: state.items.filter(i => i.id !== id)
                }))
            }),

        {
            name: "cart-items"
        }
    )
)