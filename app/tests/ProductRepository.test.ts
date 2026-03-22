import { ProductCategory } from "@/data/products";
import { ProductRepository } from "@/repositories/ProductRepository";

const repo = new ProductRepository();

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
        expect(p.category).toBe(ProductCategory.Burger);
    });
});