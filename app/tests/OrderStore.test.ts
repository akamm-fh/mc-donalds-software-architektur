import { Burger } from "@/models/Burger";
import { useOrderStore } from "@/stores/OrderStore"

beforeEach(() => {
    useOrderStore.setState({ orders: [], orderCount: 1 });
});

test("should place a new order", () => {
    // Arrange
    const orderItems = [
        { id: crypto.randomUUID(), amount: 2, product: new Burger(1, "Big Mac", 4.5) }
    ];

    // Act
    useOrderStore.getState().placeOrder(orderItems);

    // Assert
    const orders = useOrderStore.getState().orders;

    expect(orders.length).toBe(1);
    expect(orders[0].cartItems).toEqual(orderItems);
    expect(orders[0].cartItems).not.toBe(orderItems);
});

test("should cancel an order", () => {
    // Arrange
    const orderItems = [
        { id: crypto.randomUUID(), amount: 1, product: new Burger(1, "Big Mac", 4.5) }
    ];

    const store = useOrderStore.getState();
    store.placeOrder(orderItems);

    const orderId = useOrderStore.getState().orders[0].id;

    // Act
    useOrderStore.getState().cancelOrder(orderId);

    // Assert
    const orders = useOrderStore.getState().orders;

    expect(orders.length).toBe(0);
});

test("should increase order count", () => {
    const store = useOrderStore.getState();

    store.placeOrder([]);
    store.placeOrder([]);

    const orders = useOrderStore.getState().orders;

    expect(orders.length).toBe(2);
});

test("should set order date", () => {
    const store = useOrderStore.getState();

    store.placeOrder([]);

    const order = useOrderStore.getState().orders[0];

    expect(order.date).toBeInstanceOf(Date);
});