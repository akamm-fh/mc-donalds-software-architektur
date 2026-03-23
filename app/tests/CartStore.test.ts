import { products } from "@/data/products";
import { ProductRepository } from "@/repositories/ProductRepository";
import { useCartStore } from "@/stores/CartStore";

let repo: ProductRepository;

beforeEach(() => {
    useCartStore.setState({ items: [] });

    repo = new ProductRepository();
});

test("should add item to cart", () => {
    // Arrange
    const product = repo.getById(1);
    const amount = 1;

    // Act
    useCartStore.getState().addItem(amount, product!);

    // Assert
    const items = useCartStore.getState().items;

    expect(items.length).toBe(1);
    expect(items[0].product).toEqual(product);
})

test("should add existing item to cart by increasing amount", () => {
    
})

test("should remove item from cart", () => {

})

test("should increase amount of item", () => {

})

test("should decrease amount of item", () => {

})

test("should clear cart", () => {

})

