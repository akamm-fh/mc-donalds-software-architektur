import { Product } from "@/data/products";
import { useCartStore } from "@/stores/CartStore";
import { useState } from "react";

export function ProductCard({ product, handlerAfterAdd } : {product: Product, handlerAfterAdd: () => void}){
    const addItem = useCartStore((s) => s.addItem);

    const [count, setCount] = useState(0);

    const addToChart = () => {
        if (count == 0) return;

        setCount(0);
        addItem(count, product);
        handlerAfterAdd();
    }

    return(
        <div className="shadow-card p-6 rounded-4xl bg-white flex flex-col gap-6 w-64">
            <img loading="lazy" className="shadow-yellow rounded-2xl object-center size-auto" src={`/${product.name.toLowerCase().replaceAll(" ", "-")}.jpeg`} alt="" />
            
            <div className="flex flex-col gap-5 h-full justify-between">
                <div className="flex flex-col gap-2">
                    <h3 className="font-bold text-2xl">{product.name}</h3>

                    <div className="flex flex-row gap-1 justify-between">
                        <span className="italic text-xl">{product.price.toFixed(2)} €</span>
                        <span className="bg-counter px-2 py-1.5 text-white italic font-bold text-xl rounded-4xl flex flex-row gap-3">
                            <button onClick={()=>setCount(Math.max(0, count-1))} className="cursor-pointer">-</button>
                            {count}
                            <button onClick={()=>setCount(count+1)} className="cursor-pointer">+</button>
                        </span>
                    </div>
                </div>

                <button onClick={addToChart} className="bg-button duration-200 cursor-pointer hover:bg-button-hover px-4 py-1.5 text-2xl font-bold rounded-xl">Add to cart</button>
            </div>
        </div>
    );
}