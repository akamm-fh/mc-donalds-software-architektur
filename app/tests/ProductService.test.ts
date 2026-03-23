import { ProductCategory } from "@/data/products";
import { Burger } from "@/models/Burger";
import { ProductService } from "@/services/ProductService"

test("should map repository products using factory", () => {
    const mockRepo = {
        getAll: () => [
            { id: 1, name: "Test", price: 1, category: ProductCategory.Burger }
        ],
        getById: () => undefined
    };

    const service = new ProductService(mockRepo);

    const products = service.getProducts();

    expect(products[0]).toBeInstanceOf(Burger);
});