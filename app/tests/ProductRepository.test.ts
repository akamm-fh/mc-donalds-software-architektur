import { ProductCategory } from "@/data/products";
import { ProductRepository } from "@/repositories/ProductRepository";
import { ProductService } from "@/services/ProductService";

const repo = new ProductRepository();

test("should return all products", () => {
    const result = repo.getAll();

    expect(result.length).toBeGreaterThan(0);
    result.forEach(p => {
        expect(p).toHaveProperty("id");
        expect(p).toHaveProperty("name");
        expect(p).toHaveProperty("price");
        expect(p).toHaveProperty("category");
    });
});

test("should find product by id", () => {
    // Arrange
    const id = 1;

    // Act
    const product = repo.getById(id);

    // Assert
    expect(product).toBeDefined();
    expect(product?.id).toBe(id);
});

test("should return undefined for non-existing id", () => {
    // Arrange
    const id = 999;

    // Act
    const product = repo.getById(id);

    // Assert
    expect(product).toBeUndefined();
});

test("should return only burgers", () => {
    // Arrange
    const category = ProductCategory.Burger;

    // Act
    const products = repo.getByCategory(category);

    // Assert
    expect(products.length).toBeGreaterThan(0);
    products.forEach(p => {
        expect(p).toHaveProperty("id");
        expect(p).toHaveProperty("name");
        expect(p).toHaveProperty("price");
        expect(p.category).toBe(ProductCategory.Burger);
    });
});

test("should work with mock repository", () => {
    const mockRepo = {
        getAll: () => [
            { id: 1, name: "Mock", price: 1, category: 0 }
        ],
        getById: () => undefined
    };

    const service = new ProductService(mockRepo);

    const products = service.getProducts();

    expect(products.length).toBe(1);
});

test("should return empty array for category with no products", () => {
    const fakeCategory = 999 as ProductCategory;

    const result = repo.getByCategory(fakeCategory);

    expect(result).toEqual([]);
});