import { Burger } from "@/models/Burger"
import { Drink } from "@/models/Drink"
import { Side } from "@/models/Side"

import { Product, ProductCategory } from "@/data/products"
import { Desert } from "@/models/Desert"

export class ProductFactory {
    static create(category: ProductCategory, id: number, name: string, price: number): Product {
        switch (category) {
            case ProductCategory.Burger:
                return new Burger(id, name, price)

            case ProductCategory.Drink:
                return new Drink(id, name, price)

            case ProductCategory.Side:
                return new Side(id, name, price)

            case ProductCategory.Desert:
                return new Desert(id, name, price)

            default:
                throw new Error("Unknown product")
        }
    }
}