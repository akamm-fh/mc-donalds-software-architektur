'use client'

import ImprintLink from "@/components/ImprintLink";
import { useEffect } from "react";

export default function ImprintPage(){
    useEffect(() => {
        document.title = "Imprint - McDonalds SA"
    }, []);

    return(
        <>
            <h1 className="md:text-6xl text-4xl leading-normal font-bold">Imprint</h1>

            <div className="flex flex-col md:gap-8 gap-4">
                <h2 className="md:text-5xl text-3xl leading-normal font-bold">Images:</h2>
                <ul className="list-disc list-inside">
                    <ImprintLink link="https://static.rollingpin.at/app/uploads/2022/08/McDonalds-1132x755.jpg" />
                    <ImprintLink link="https://www.designenlassen.de/blog/wp-content/uploads/2024/02/McDonalds_square_2020.svg_.png" />
                    <ImprintLink link="https://mcdonalds-graz.at/wp-content/uploads/2023/09/Produktseite.jpg" />

                    <ImprintLink link="https://s7d1.scene7.com/is/image/mcdonalds/20260107_Product-Hero_7080_832x822px:nutrition-calculator-tile?wid=822&hei=822&dpr=off" />
                    <ImprintLink link="https://www.mcdonalds.at/wp-content/uploads/2023/02/1500x1500-web-pop-neu-getraenke-glaeser-0-5l-cola-zero-768x768.png" />
                    <ImprintLink link="https://www.mcdonalds.at/wp-content/uploads/2023/02/1500x1500-web-pop-neu-getraenke-glaeser-0-5l-coca-cola.png" />
                    <ImprintLink link="https://www.mcdonalds.at/wp-content/uploads/2025/04/1500x1500-web-getraenke-glaeser-0-5l-fanta-zero.png" />
                    <ImprintLink link="https://www.mcdonalds.at/wp-content/uploads/2023/02/1500x1500-web-pop-neu-big-mac.png" />
                    <ImprintLink link="https://www.mcdonalds.at/wp-content/uploads/2023/02/1500x1500-web-pop-neu-mcchicken.png" />
                    <ImprintLink link="https://www.mcdonalds.at/wp-content/uploads/2023/02/1500x1500-web-pop-neu-cheeseburger.png" />
                    <ImprintLink link="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQD0njeYobdL7PQ5Y3kFXaGahZjZFDTNlxakQ&s" />
                    <ImprintLink link="https://www.mcdonalds.at/wp-content/uploads/2023/02/1500x1500-web-pop-neu-hamburger.png" />
                    <ImprintLink link="https://www.mcdonalds.at/wp-content/uploads/2023/02/1500x1500-web-pop-neu-chickenburger-768x768.png" />
                    <ImprintLink link="https://www.mcdonalds.at/wp-content/uploads/2023/02/1500x1500-web-pop-neu-getraenke-roemerquelle-still-768x768.png" />
                    <ImprintLink link="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWEnjFqRZMoBl8aN7yrDP_OObcNPlzxFqkVA&s" />
                    <ImprintLink link="https://www.mcdonalds.at/wp-content/uploads/2023/02/1500x1500-web-pop-neu-pommes-klein.png" />
                    <ImprintLink link="https://www.mcdonalds.at/wp-content/uploads/2023/02/1500x1500-web-pop-neu-pommes-mittel-768x768.png" />
                    <ImprintLink link="https://www.mcdonalds.at/wp-content/uploads/2023/02/1500x1500-web-pop-neu-pommes-large-768x768.png" />
                    <ImprintLink link="https://www.mcdonalds.at/wp-content/uploads/2023/02/1500x1500-web-pop-neu-fingerfood-6er-chicken-mcnuggets.png" />
                    <ImprintLink link="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLG_C7KbpRd53j1hqke3L5iBwxgNQ2KPpURQ&s" />
                    <ImprintLink link="https://www.mcdonalds.at/wp-content/uploads/2023/02/1500x1500-web-pop-neu-desserts-mcflurry-schokodrops-mit-sauce-768x768.png" />
                    <ImprintLink link="https://www.mcdonalds.at/wp-content/uploads/2023/02/1500x1500-web-pop-neu-desserts-apfeltasche.png" />                </ul>
            </div>
        </>
    );
}