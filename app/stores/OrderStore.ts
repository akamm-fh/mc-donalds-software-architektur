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

                set((state) => {
                    const newCount = state.orderCount + 1;

                    return ({
                        orderCount: newCount,
                        orders: [
                            ...state.orders,
                            {
                                id: `${newCount}-${now.getFullYear()}`,
                                date: now,
                                cartItems: cartItems.map(item => ({
                                    ...item,
                                    product: { ...item.product }
                                }))
                            }
                        ]
                    })}
                );
            },

            cancelOrder: (id) => {set((state) => ({orders: [...state.orders.filter((i) => i.id !== id)]}))},
        }),
        {
            name: "orders"
        }
    )
)