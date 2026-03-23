'use client'

import { ProductService } from "@/services/ProductService"
import { Product, ProductCategory } from "@/data/products"
import { ProductCard } from "@/components/ProductCard"
import { useEffect, useState } from "react"
import NotificationCard from "@/components/NotificationCard"
import { ProductRepository } from "@/repositories/ProductRepository"

export default function ProductsPage() {
  useEffect(() => {
    document.title = "Products"
  }, []);

  const [isAddedToCart, setIsAddedToCart] = useState(false);

  useEffect(()=>{
    if(isAddedToCart) setTimeout(()=>{setIsAddedToCart(false)}, 3000);
  }, [isAddedToCart])

  const repo = new ProductRepository();
  const service = new ProductService(repo);

  const products = service.getProducts();

  const burgers = products.filter(product => product.category === ProductCategory.Burger);
  const drinks = products.filter(product => product.category === ProductCategory.Drink);
  const sides = products.filter(product => product.category === ProductCategory.Side);
  const deserts = products.filter(product => product.category === ProductCategory.Desert);

  const productsRender = [{category: ProductCategory.Burger, products: burgers}, {category: ProductCategory.Drink, products: drinks}, {category: ProductCategory.Side, products: sides}, {category: ProductCategory.Desert, products: deserts}]

  return (
    <>
      {isAddedToCart && <NotificationCard message="Product added to cart!" link="/pages/cart" linkText="View your cart" />}

      <h1 className="md:text-6xl text-4xl leading-normal font-bold">Products</h1>

      {productsRender.map(productCategory => (
        <section key={ProductCategory[productCategory.category]} className="flex flex-col md:gap-6 gap-5">
          <h2 className="md:text-5xl text-3xl leading-normal font-bold">{ProductCategory[productCategory.category]}</h2>
          <div className="flex flex-row md:gap-8 sm:gap-6 gap-3.5 flex-wrap">
            {productCategory.products.map((product: Product)=>(
              <ProductCard key={product.id} product={product} handlerAfterAdd={() => setIsAddedToCart(true)} />
            ))} 
          </div>
        </section>        
      ))}
    </>
  )
}