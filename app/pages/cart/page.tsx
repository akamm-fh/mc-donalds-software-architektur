'use client'

import CartItemCard from "@/components/CartCard";
import NotificationCard from "@/components/NotificationCard";
import { useCartStore } from "@/stores/CartStore";
import { useOrderStore } from "@/stores/OrderStore";
import { useEffect, useState } from "react";

export default function CartPage(){
    useEffect(() => {
        document.title = "Cart"
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
        
            <div className="flex flex-row justify-between items-center">
                <div className="flex flex-col items-end gap-6">
                    <h1 className="text-6xl leading-normal font-bold">Your Cart:</h1>
                    {itemsInCart && <p className="leading-normal text-2xl">Products in your cart: {items.length}</p>}
                </div>

                <div className="flex flex-col items-end gap-6">
                    {itemsInCart && <button onClick={onClickOrderHandler} className="bg-button h-fit duration-200 cursor-pointer hover:bg-button-hover px-4 py-1.5 text-3xl font-bold leading-normal rounded-xl">Place your order</button>}
                    <span className="text-5xl leading-normal font-bold italic text-cart-red">{totalCost} €</span>
                </div>
            </div>

            <div className="flex flex-col gap-9 h-full">
                {itemsInCart ? items.map(item => <CartItemCard key={item.id} item={item}/>) : <p>No products in your cart yet.</p>}
            </div>
        </>
    );
}