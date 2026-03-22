import { Product, ProductCategory } from "@/data/products";

export class Side implements Product {
    constructor(
        public id: number,
        public name: string,
        public price: number
    ) {}

    category = ProductCategory.Side
}