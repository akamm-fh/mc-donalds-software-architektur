import { ProductCategory } from "@/data/products";
import { CartItem, useCartStore } from "@/stores/CartStore";

export default function CartItemCard({item}: {item: CartItem}){
    const removeItem = useCartStore((s) => s.removeItem);
    const increaseAmount = useCartStore((s) => s.increaseAmount);
    const decreaseAmount = useCartStore((s) => s.decreaseAmount);

    const totalItemCost = (item.product.price * item.amount).toFixed(2);

    return(
        <div className="relative shadow-card p-6 lg:gap-12 gap-6 sm:rounded-4xl rounded-2xl bg-white flex flex-row justify-between lg:justify-start items-center h-fit">
            <div className="flex flex-row items-center lg:gap-12 gap-8">
                <img loading="lazy" className="rounded-2xl object-center md:size-36 size-30 sm:inline hidden" src={`/${item.product.name.toLowerCase().replaceAll(" ", "-")}.jpeg`} alt="" />

                <div className="flex flex-col gap-y-1">
                    <div className="flex flex-row gap-y-0 sm:gap-x-6 gap-x-4 flex-wrap items-center">
                        <h2 className="md:text-3xl sm:text-2xl text-xl font-bold leading-normal">{item.product.name}</h2>
                        <span className="font-bold sm:text-xl text-lg">{item.product.price.toFixed(2)} €</span>    
                    </div>

                    <p className="sm:text-xl text-lg leading-normal italic">{ProductCategory[item.product.category]}</p>
                </div>
            </div>

            <div className="flex lg:flex-row flex-col lg:items-center items-end lg:gap-12 sm:gap-4 gap-2">
                <span className="text-button italic font-bold lg:text-4xl md:text-3xl text-xl text-nowrap lg:absolute lg:right-6">{totalItemCost} €</span>
                
                <span className="bg-counter px-2 py-1.5 text-white italic font-bold sm:text-xl text-lg rounded-4xl flex flex-row gap-3">
                    <button onClick={()=>decreaseAmount(item.id)} className="cursor-pointer">-</button>
                    {item.amount}
                    <button onClick={()=>increaseAmount(item.id)} className="cursor-pointer">+</button>
                </span>
            </div>
            <button onClick={() => removeItem(item.id)} className="absolute sm:top-6 top-4 sm:right-4 right-2.5 sm:text-4xl text-2xl leading-0 text-cart-red cursor-pointer">x</button>
        </div>
    );
}