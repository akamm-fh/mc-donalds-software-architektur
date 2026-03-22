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
  
    return(
        <>
            {isOrderCanceled && <NotificationCard message="Order canceled!" link={null} linkText={null}/>}
        
            <h1 className="text-6xl leading-normal font-bold">Orders</h1>

            <div className="flex flex-row gap-8 flex-wrap">
                {orders.map(order => <OrderCard key={order.id} order={order} onCancelHandler={()=>setIsOrderCanceled(true)} />)}
            </div>
            
        </>
    );
}