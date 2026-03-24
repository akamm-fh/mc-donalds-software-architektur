'use client'

import NotificationCard from "@/components/NotificationCard";
import OrderCard from "@/components/OrderCard";
import { useOrderStore } from "@/stores/OrderStore";
import { useEffect, useState } from "react";

export default function OrdersPage(){
    useEffect(() => {
        document.title = "Orders"
    }, []);

    const [isOrderCanceled, setIsOrderCanceled] = useState(false);
    
    useEffect(()=>{
        if(isOrderCanceled) setTimeout(()=>{setIsOrderCanceled(false)}, 3000);
    }, [isOrderCanceled])

    const orders = useOrderStore((s) => s.orders).sort((o1, o2) => new Date(o2.date).getTime() - new Date(o1.date).getTime());
  
    const ordersAvailable = orders.length > 0;

    return(
        <>
            {isOrderCanceled && <NotificationCard message="Order canceled!" link={null} linkText={null}/>}
        
            <h1 className="md:text-6xl text-4xl leading-normal font-bold">Orders</h1>

            <div className="flex flex-col md:grid 4xl:grid-cols-4 2xl:grid-cols-3 lg:grid-cols-2 md:gap-8 gap-6">
                {ordersAvailable ? orders.map(order => <OrderCard key={order.id} order={order} onCancelHandler={()=>setIsOrderCanceled(true)} />) : <p>No orders placed yet.</p>}
            </div>
            
        </>
    );
}