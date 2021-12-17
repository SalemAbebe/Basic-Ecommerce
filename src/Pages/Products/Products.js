import React, { useEffect, useState } from "react";
import Item from "../../Components/Item/Item";
import { AllProducts } from "./Products.style";
const Products = () => {
  const [allProducts, setAllProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setAllProducts(data));
  }, []);
  console.log(allProducts);
  return (
    <AllProducts>
      {allProducts.map((product, index) => (
        <Item
          key={index}
          id={product.id}
          title={product.title}
          image={product.image}
          price={product.price}
        />
      ))}
    </AllProducts>
  );
};

export default Products;
