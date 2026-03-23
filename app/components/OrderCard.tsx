import { Order, useOrderStore } from "@/stores/OrderStore";
import OrderItemCard from "./OrderItemCard";

export default function OrderItem({ order, onCancelHandler } : { order: Order, onCancelHandler: () => void}){
    const cancelOrder = useOrderStore((s) => s.cancelOrder);

    const totalCost = order.cartItems.reduce((sum, item) => sum + item.amount * item.product.price, 0).toFixed(2);

    const formattedDate = new Date(order.date).toLocaleString('en-GB', {
        day: '2-digit',
        month: 'short',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        hour12: false,
    });

    return(
        <div className="shadow-card p-6 rounded-4xl bg-white flex flex-col gap-6 justify-between md:w-fit w-full">
            <div className="flex flex-col md:gap-6 gap-4">
                <div className="flex flex-col gap-1">
                    <h2 className="font-bold md:text-4xl sm:text-3xl text-xl">Order #{order.id}</h2>
                    <p className="italic sm:text-base text-sm">{formattedDate}</p>
                </div>

                <div className="flex flex-col gap-2">
                    {order.cartItems.map(item => <OrderItemCard key={item.id} item={item} />)}
                </div>
            </div>

            <div className="flex flex-col md:gap-6 gap-4">
                <h3 className="md:text-2xl sm:text-xl text-lg font-bold">Total amount: <span className="text-cart-red">{totalCost} €</span></h3>

                <button onClick={() => {cancelOrder(order.id); onCancelHandler()}} className="bg-button w-fit duration-200 cursor-pointer hover:bg-button-hover px-4 py-1.5 md:text-2xl sm:text-xl text-lg font-bold rounded-xl">Cancel order</button>
            </div>
        </div>
    )
}