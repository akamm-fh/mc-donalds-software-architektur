import { create } from "zustand";
import { CartItem } from "./CartStore"
import { persist } from "zustand/middleware";

export type Order = {
    id: string,
    date: Date,
    cartItems: CartItem[],
}

type OrderStore = {
    orders: Order[],
    orderCount: number;
    placeOrder: (cartItems: CartItem[]) => void,
    cancelOrder: (id: string) => void;
}

export const useOrderStore = create<OrderStore>()(
    persist(
        (set) => ({
            orders: [],
            orderCount: 1,

            placeOrder: (cartItems) => {
                const now = new Date();

                set((state) => ({orderCount: state.orderCount + 1 ,orders: [...state.orders,
                        {
                            id: `${state.orderCount + 1}-${now.getFullYear()}`,
                            date: now,
                            cartItems: cartItems
                        }
                    ]
                }));
            },

            cancelOrder: (id) => {set((state) => ({orders: [...state.orders.filter((i) => i.id !== id)]}))},

        }),
        {
            name: "orders"
        }
    )
)