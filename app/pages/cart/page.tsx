'use client'

import CartItemCard from "@/components/CartCard";
import NotificationCard from "@/components/NotificationCard";
import { useCartStore } from "@/stores/CartStore";
import { useOrderStore } from "@/stores/OrderStore";
import { useEffect, useState } from "react";

export default function CartPage(){
    useEffect(() => {
        document.title = "Cart - McDonalds SA"
    }, []);

    const [isOrderPlaced, setIsOrderPlaced] = useState(false);
    
    useEffect(()=>{
        if(isOrderPlaced) setTimeout(()=>{setIsOrderPlaced(false)}, 3000);
    }, [isOrderPlaced])

    const items = useCartStore((s) => s.items);
    const clearCart = useCartStore((s) => s.clearCart);
    const placeOrder = useOrderStore((s) => s.placeOrder);

    const onClickOrderHandler = () =>{
        placeOrder(items);
        clearCart();
        setIsOrderPlaced(true);
    }

    const totalCost = items.reduce((sum, item) => sum + item.amount * item.product.price, 0).toFixed(2);

    const itemsInCart = items.length > 0;

    return(
        <>
            {isOrderPlaced && <NotificationCard message="Order placed!" link="/pages/orders" linkText="View your orders"/>}
        
            <div className="flex lg:flex-row flex-col justify-between lg:gap-0 gap-4">
                <div className="flex flex-col lg:gap-6 sm:gap-4 gap-2">
                    <h1 className="md:text-6xl text-4xl font-bold">Your Cart:</h1>
                    {itemsInCart && <p className="leading-normal md:text-2xl sm:text-xl text-lg">Products in your cart: {items.length}</p>}
                </div>

                <div className="flex lg:flex-col flex-row lg:items-end justify-between lg:justify-start sm:gap-6 gap-4">
                    {itemsInCart && <button onClick={onClickOrderHandler} className="bg-button h-fit duration-200 cursor-pointer hover:bg-button-hover px-4 py-1.5 md:text-3xl sm:text-xl text-lg font-bold leading-normal rounded-xl">Place your order</button>}
                    <span className="md:text-5xl sm:text-3xl text-2xl font-bold italic text-nowrap text-cart-red">{totalCost} €</span>
                </div>
            </div>

            <div className="flex flex-col sm:gap-8 gap-4 h-full">
                {itemsInCart ? items.map(item => <CartItemCard key={item.id} item={item}/>) : <p>No products in your cart yet.</p>}
            </div>
        </>
    );
}