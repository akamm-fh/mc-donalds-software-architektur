import { ProductCategory } from "@/data/products";
import { ProductFactory } from "@/factories/ProductFactory";
import { Burger } from "@/models/Burger";

test("should create Burger product", () => {
    // Arrange
    const category = ProductCategory.Burger;

    // Act
    const product = ProductFactory.create(category, 1, "Test Burger", 5);

    // Assert
    expect(product).toBeInstanceOf(Burger);
    expect(product.name).toBe("Test Burger");
});

test("should throw error for unknown category", () => {
    // Arrange
    const wrongCategory = 999 as ProductCategory;

    // Act + Assert
    expect(() => {
        ProductFactory.create(wrongCategory, 1, "X", 1);
    }).toThrow("Unknown product");
});