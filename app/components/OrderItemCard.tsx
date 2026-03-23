import { CartItem } from "@/stores/CartStore";

export default function OrderItemCard({item} : {item: CartItem}){
    const totalCost = (item.amount * item.product.price).toFixed(2);

    return(
        <p key={item.id} className="md:text-lg sm:text-base text-sm">{item.product.name} (á {item.product.price} €) x{item.amount} - <span className="font-bold">{totalCost} €</span></p>
    )
}