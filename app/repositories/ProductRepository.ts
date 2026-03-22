import { Product, ProductCategory, products } from "@/data/products"

export interface IProductRepository {
    getAll(): Product[];
    getById(id: number): Product | undefined;
}

export class ProductRepository implements IProductRepository {
    getAll() {
        return products
    }

    getById(id: number) {
        return products.find(product => product.id === id)
    }

    getByCategory(category: ProductCategory) {
        return products.filter(product => product.category === category)
    }
}