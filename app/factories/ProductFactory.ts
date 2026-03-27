import { Burger } from "@/models/Burger"
import { Drink } from "@/models/Drink"
import { Side } from "@/models/Side"

import { Product, ProductCategory } from "@/data/products"
import { Dessert } from "@/models/Dessert"

export class ProductFactory {
    static create(category: ProductCategory, id: number, name: string, price: number): Product {
        switch (category) {
            case ProductCategory.Burger:
                return new Burger(id, name, price)

            case ProductCategory.Drink:
                return new Drink(id, name, price)

            case ProductCategory.Side:
                return new Side(id, name, price)

            case ProductCategory.Dessert:
                return new Dessert(id, name, price)

            default:
                throw new Error("Unknown product")
        }
    }
}