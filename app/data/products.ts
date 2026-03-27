export interface Product {
    id: number,
    name: string,
    price: number,
    category: ProductCategory,
}

export enum ProductCategory {
    Burger,
    Drink,
    Side,
    Dessert,
}

export const products: Product[] = [
  // Burger
  { id: 1, name: "Big Mac", price: 5.9, category: ProductCategory.Burger },
  { id: 2, name: "McChicken", price: 5.5, category: ProductCategory.Burger },
  { id: 3, name: "Cheeseburger", price: 2.9, category: ProductCategory.Burger },
  { id: 4, name: "Hamburger", price: 2.5, category: ProductCategory.Burger },
  { id: 5, name: "Double Cheeseburger", price: 3.9, category: ProductCategory.Burger },
  { id: 6, name: "Chickenburger", price: 3.5, category: ProductCategory.Burger },

  // Beilagen
  { id: 7, name: "Pommes klein", price: 2.5, category: ProductCategory.Side },
  { id: 8, name: "Pommes mittel", price: 3.0, category: ProductCategory.Side },
  { id: 9, name: "Pommes groß", price: 3.5, category: ProductCategory.Side },
  { id: 10, name: "Chicken Nuggets 6er", price: 4.5, category: ProductCategory.Side },
  { id: 11, name: "Chicken Nuggets 9er", price: 5.9, category: ProductCategory.Side },
  { id: 12, name: "Salat", price: 3.8, category: ProductCategory.Side },

  // Getränke
  { id: 13, name: "Cola", price: 2.5, category: ProductCategory.Drink },
  { id: 14, name: "Cola Zero", price: 2.5, category: ProductCategory.Drink },
  { id: 15, name: "Fanta", price: 2.5, category: ProductCategory.Drink },
  { id: 16, name: "Sprite", price: 2.5, category: ProductCategory.Drink },
  { id: 17, name: "Wasser", price: 2.0, category: ProductCategory.Drink },
  { id: 18, name: "Eistee", price: 2.8, category: ProductCategory.Drink },

  // Desserts
  { id: 19, name: "McFlurry", price: 3.5, category: ProductCategory.Dessert },
  { id: 20, name: "Apfeltasche", price: 2.2, category: ProductCategory.Dessert },
];