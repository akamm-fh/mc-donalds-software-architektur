import { ProductRepository } from "@/repositories/ProductRepository";
import { ProductService } from "@/services/ProductService"

test("should return products with correct structure", () => {
    // Arrange
    const repo = new ProductRepository();
    const service = new ProductService(repo);

    // Act
    const products = service.getProducts();

    // Assert
    expect(products.length).toBeGreaterThan(0);
    expect(products[0]).toHaveProperty("id");
    expect(products[0]).toHaveProperty("name");
});