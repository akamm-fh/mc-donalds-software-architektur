import { ProductFactory } from "@/factories/ProductFactory";
import { IProductRepository } from "@/repositories/ProductRepository"

export class ProductService {
    constructor(private repo: IProductRepository) {}

    getProducts() {
        return this.repo.getAll().map(product => ProductFactory.create(product.category, product.id, product.name, product.price));
    };
}