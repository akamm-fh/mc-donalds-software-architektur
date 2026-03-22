'use client'

import { useEffect } from "react";

export default function ImprintPage(){
    useEffect(() => {
        document.title = "Imprint"
    }, []);

    return(
        <>
            <h1 className="text-6xl leading-normal font-bold">Imprint</h1>

            <div className="flex flex-row gap-8">
                <h2>Images:</h2>
                <ul className="list-disc">
                    <li><a href="https://static.rollingpin.at/app/uploads/2022/08/McDonalds-1132x755.jpg">https://static.rollingpin.at/app/uploads/2022/08/McDonalds-1132x755.jpg</a></li>
                    <li><a href="https://www.designenlassen.de/blog/wp-content/uploads/2024/02/McDonalds_square_2020.svg_.png">https://www.designenlassen.de/blog/wp-content/uploads/2024/02/McDonalds_square_2020.svg_.png</a></li>
                    <li><a href="https://mcdonalds-graz.at/wp-content/uploads/2023/09/Produktseite.jpg">https://mcdonalds-graz.at/wp-content/uploads/2023/09/Produktseite.jpg</a></li>

                    <li><a href="https://s7d1.scene7.com/is/image/mcdonalds/20260107_Product-Hero_7080_832x822px:nutrition-calculator-tile?wid=822&hei=822&dpr=off">https://s7d1.scene7.com/is/image/mcdonalds/20260107_Product-Hero_7080_832x822px:nutrition-calculator-tile?wid=822&hei=822&dpr=off</a></li>
                    <li><a href="https://www.mcdonalds.at/wp-content/uploads/2023/02/1500x1500-web-pop-neu-getraenke-glaeser-0-5l-cola-zero-768x768.png">https://www.mcdonalds.at/wp-content/uploads/2023/02/1500x1500-web-pop-neu-getraenke-glaeser-0-5l-cola-zero-768x768.png</a></li>
                    <li><a href="https://www.mcdonalds.at/wp-content/uploads/2023/02/1500x1500-web-pop-neu-getraenke-glaeser-0-5l-coca-cola.png">https://www.mcdonalds.at/wp-content/uploads/2023/02/1500x1500-web-pop-neu-getraenke-glaeser-0-5l-coca-cola.png</a></li>
                    <li><a href="https://www.mcdonalds.at/wp-content/uploads/2025/04/1500x1500-web-getraenke-glaeser-0-5l-fanta-zero.png">https://www.mcdonalds.at/wp-content/uploads/2025/04/1500x1500-web-getraenke-glaeser-0-5l-fanta-zero.png</a></li>
                    <li><a href="https://www.mcdonalds.at/wp-content/uploads/2023/02/1500x1500-web-pop-neu-big-mac.png">https://www.mcdonalds.at/wp-content/uploads/2023/02/1500x1500-web-pop-neu-big-mac.png</a></li>
                    <li><a href="https://www.mcdonalds.at/wp-content/uploads/2023/02/1500x1500-web-pop-neu-mcchicken.png">https://www.mcdonalds.at/wp-content/uploads/2023/02/1500x1500-web-pop-neu-mcchicken.png</a></li>
                    <li><a href="https://www.mcdonalds.at/wp-content/uploads/2023/02/1500x1500-web-pop-neu-cheeseburger.png">https://www.mcdonalds.at/wp-content/uploads/2023/02/1500x1500-web-pop-neu-cheeseburger.png</a></li>
                    <li><a href="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQD0njeYobdL7PQ5Y3kFXaGahZjZFDTNlxakQ&s">https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQD0njeYobdL7PQ5Y3kFXaGahZjZFDTNlxakQ&s</a></li>
                    <li><a href="https://www.mcdonalds.at/wp-content/uploads/2023/02/1500x1500-web-pop-neu-hamburger.png">https://www.mcdonalds.at/wp-content/uploads/2023/02/1500x1500-web-pop-neu-hamburger.png</a></li>
                    <li><a href="https://www.mcdonalds.at/wp-content/uploads/2023/02/1500x1500-web-pop-neu-chickenburger-768x768.png">https://www.mcdonalds.at/wp-content/uploads/2023/02/1500x1500-web-pop-neu-chickenburger-768x768.png</a></li>
                    <li><a href="https://www.mcdonalds.at/wp-content/uploads/2023/02/1500x1500-web-pop-neu-getraenke-roemerquelle-still-768x768.png">https://www.mcdonalds.at/wp-content/uploads/2023/02/1500x1500-web-pop-neu-getraenke-roemerquelle-still-768x768.png</a></li>
                    <li><a href="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWEnjFqRZMoBl8aN7yrDP_OObcNPlzxFqkVA&s">https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWEnjFqRZMoBl8aN7yrDP_OObcNPlzxFqkVA&s</a></li>
                    <li><a href="https://www.mcdonalds.at/wp-content/uploads/2023/02/1500x1500-web-pop-neu-pommes-klein.png">https://www.mcdonalds.at/wp-content/uploads/2023/02/1500x1500-web-pop-neu-pommes-klein.png</a></li>
                    <li><a href="https://www.mcdonalds.at/wp-content/uploads/2023/02/1500x1500-web-pop-neu-pommes-mittel-768x768.png">https://www.mcdonalds.at/wp-content/uploads/2023/02/1500x1500-web-pop-neu-pommes-mittel-768x768.png</a></li>
                    <li><a href="https://www.mcdonalds.at/wp-content/uploads/2023/02/1500x1500-web-pop-neu-pommes-large-768x768.png">https://www.mcdonalds.at/wp-content/uploads/2023/02/1500x1500-web-pop-neu-pommes-large-768x768.png</a></li>
                    <li><a href="https://www.mcdonalds.at/wp-content/uploads/2023/02/1500x1500-web-pop-neu-fingerfood-6er-chicken-mcnuggets.png">https://www.mcdonalds.at/wp-content/uploads/2023/02/1500x1500-web-pop-neu-fingerfood-6er-chicken-mcnuggets.png</a></li>
                    <li><a href="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLG_C7KbpRd53j1hqke3L5iBwxgNQ2KPpURQ&s">https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLG_C7KbpRd53j1hqke3L5iBwxgNQ2KPpURQ&s</a></li>
                    <li><a href="https://www.mcdonalds.at/wp-content/uploads/2023/02/1500x1500-web-pop-neu-desserts-mcflurry-schokodrops-mit-sauce-768x768.png">https://www.mcdonalds.at/wp-content/uploads/2023/02/1500x1500-web-pop-neu-desserts-mcflurry-schokodrops-mit-sauce-768x768.png</a></li>
                    <li><a href="https://www.mcdonalds.at/wp-content/uploads/2023/02/1500x1500-web-pop-neu-desserts-apfeltasche.png">https://www.mcdonalds.at/wp-content/uploads/2023/02/1500x1500-web-pop-neu-desserts-apfeltasche.png</a></li>
                </ul>
            </div>
        </>
    );
}