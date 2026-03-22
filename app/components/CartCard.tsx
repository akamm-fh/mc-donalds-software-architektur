import { ProductCategory } from "@/data/products";
import { CartItem, useCartStore } from "@/stores/CartStore";

export default function CartItemCard({item}: {item: CartItem}){
    const removeItem = useCartStore((s) => s.removeItem);
    const increaseAmount = useCartStore((s) => s.increaseAmount);
    const decreaseAmount = useCartStore((s) => s.decreaseAmount);

    const totalItemCost = (item.product.price * item.amount).toFixed(2);

    return(
        <div className="relative shadow-card p-6 rounded-4xl bg-white flex flex-row justify-between items-center h-fit">
            <div className="flex flex-row items-center gap-12">
                <img loading="lazy" className="shadow-yellow rounded-2xl object-center size-36" src={`/${item.product.name.toLowerCase().replaceAll(" ", "-")}.jpeg`} alt="" />

                <div>
                    <div className="flex flex-row gap-6 items-center">
                        <h2 className="text-3xl font-bold leading-normal">{item.product.name}</h2>
                        <span className="font-bold text-xl">{item.product.price.toFixed(2)} €</span>    
                    </div>

                    <p className="text-xl leading-normal italic">{ProductCategory[item.product.category]}</p>
                </div>

                <span className="bg-counter px-2 py-1.5 text-white italic font-bold text-xl rounded-4xl flex flex-row gap-3">
                    <button onClick={()=>decreaseAmount(item.id)} className="cursor-pointer">-</button>
                    {item.amount}
                    <button onClick={()=>increaseAmount(item.id)} className="cursor-pointer">+</button>
                </span>
            </div>

            <span className="text-button italic font-bold text-4xl">{totalItemCost} €</span>
            <button onClick={() => removeItem(item.id)} className="absolute top-6 right-5 text-4xl leading-0 text-cart-red cursor-pointer">x</button>
        </div>
    );
}