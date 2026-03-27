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

test("should create Drink product", () => {
    const product = ProductFactory.create(ProductCategory.Drink, 1, "Cola", 2);

    expect(product.constructor.name).toBe("Drink");
});

test("should create Side product", () => {
    const product = ProductFactory.create(ProductCategory.Side, 1, "Pommes groß", 2);

    expect(product.constructor.name).toBe("Side");
});

test("should create Dessert product", () => {
    const product = ProductFactory.create(ProductCategory.Dessert, 1, "Apfeltasche", 2);

    expect(product.constructor.name).toBe("Dessert");
});

test("should throw error for unknown category", () => {
    // Arrange
    const wrongCategory = 999 as ProductCategory;

    // Act + Assert
    expect(() => {
        ProductFactory.create(wrongCategory, 1, "X", 1);
    }).toThrow("Unknown product");
});