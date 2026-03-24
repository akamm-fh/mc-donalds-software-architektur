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
        <div className="shadow-card sm:p-6 p-4 rounded-4xl bg-white flex flex-col gap-6 lg:w-64 md:w-56 sm:w-48 w-42">
            <img loading="lazy" className="rounded-2xl object-center size-auto" src={`/${product.name.toLowerCase().replaceAll(" ", "-")}.jpeg`} alt="" />
            
            <div className="flex flex-col gap-5 h-full justify-between">
                <div className="flex flex-col gap-2">
                    <h3 className="font-bold text-2xl break-all">{product.name}</h3>

                    <div className="flex sm:flex-row flex-col gap-2 sm:justify-between">
                        <span className="italic text-xl">{product.price.toFixed(2)} €</span>
                        <span className="bg-counter w-fit px-2 py-1.5 text-white italic font-bold text-xl rounded-4xl flex flex-row gap-3">
                            <button onClick={()=>setCount(Math.max(0, count-1))} className="cursor-pointer">-</button>
                            {count}
                            <button onClick={()=>setCount(count+1)} className="cursor-pointer">+</button>
                        </span>
                    </div>
                </div>

                <button onClick={addToChart} className="bg-button duration-200 cursor-pointer hover:bg-button-hover sm:px-4 px-2 py-1.5 lg:text-2xl md:text-xl text-base font-bold rounded-xl">Add to cart</button>
            </div>
        </div>
    );
}