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

    expect(items).toHaveLength(1);
    expect(items[0].product.id).toBe(product!.id);
    expect(items[0].amount).toBe(amount);
});

test("should add existing item to cart by increasing amount", () => {
    // Arrange
    const product = repo.getById(1)!;

    // Act
    useCartStore.getState().addItem(1, product);
    useCartStore.getState().addItem(2, product);

    // Assert
    const items = useCartStore.getState().items;

    expect(items).toHaveLength(1);
    expect(items[0].amount).toBe(3);
});

test("should remove item from cart", () => {
    // Arrange
    const product = repo.getById(1)!;

    useCartStore.getState().addItem(1, product);
    const item = useCartStore.getState().items[0];

    // Act
    useCartStore.getState().removeItem(item.id);

    // Assert
    const items = useCartStore.getState().items;

    expect(items).toHaveLength(0);
});

test("should decrease amount of item", () => {
    // Arrange
    const product = repo.getById(1)!;

    useCartStore.getState().addItem(2, product);
    const item = useCartStore.getState().items[0];

    // Act
    useCartStore.getState().decreaseAmount(item.id);

    // Assert
    const updatedItem = useCartStore.getState().items[0];

    expect(updatedItem.amount).toBe(1);
});

test("should remove item when amount reaches zero", () => {
    // Arrange
    const product = repo.getById(1)!;

    useCartStore.getState().addItem(1, product);
    const item = useCartStore.getState().items[0];

    // Act
    useCartStore.getState().decreaseAmount(item.id);

    // Assert
    const items = useCartStore.getState().items;

    expect(items).toHaveLength(0);
});

test("should clear cart", () => {
    // Arrange
    const product = repo.getById(1)!;

    useCartStore.getState().addItem(1, product);
    useCartStore.getState().addItem(2, product);

    // Act
    useCartStore.getState().clearCart();

    // Assert
    const items = useCartStore.getState().items;

    expect(items).toHaveLength(0);
});

test("should not affect other items when increasing one", () => {
    const product1 = repo.getById(1)!;
    const product2 = repo.getById(2)!;

    const store = useCartStore.getState();

    store.addItem(1, product1);
    store.addItem(1, product2);

    const item1 = useCartStore.getState().items[0];

    store.increaseAmount(item1.id);

    const items = useCartStore.getState().items;

    expect(items[0].amount).toBe(2);
    expect(items[1].amount).toBe(1);
});