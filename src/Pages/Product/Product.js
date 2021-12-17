import React, { useEffect, useState, useContext } from "react";
import { useParams, useHistory } from "react-router-dom";
// import CartContext from "../../Context/CartContext";
import {
  Img,
  DetailInfo,
  ProductDetail,
  Price,
  ProductImg,
  Title,
  Description,
  Category,
  Counter,
  AddRemoveButton,
  Button,
} from "./productsDetail.style";
import { IoMdRemove, IoMdAdd } from "react-icons/io";
import { useStateValue } from "../../StateProvider/StateProvider";
// import Counter from "./Counter";

const Product = () => {
  const [{ cart }, dispatch] = useStateValue();
  const { id } = useParams();
  const [product, setProduct] = useState({});
  // const [count, setCount] = useState(0);
  // const { cart, setCart } = useContext(CartContext);
  const history = useHistory();

  useEffect(() => {
    console.log(id);
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, [id]);

  const [counter, setCounter] = useState(1);

  const handleClickIncrement = () => {
    setCounter(counter + 1);
  };

  const handleClickDecrement = () => {
    setCounter(counter - 1);
  };

  const addToCart = () => {
    dispatch({
      type: "ADD_TO_CART",
      item: {
        id: product.id,
        title: product.title,
        image: product.image,
        price: product.price * counter,
        description: product.description,
        counter: counter,
      },
    });
    history.push("/");
  };

  return (
    <ProductDetail>
      <ProductImg>
        <Img src={product.image} alt="" />
      </ProductImg>
      <DetailInfo>
        <Category>{product.category}</Category>
        <Title> {product.title}</Title>
        <Description> {product.description}</Description>
        <AddRemoveButton onClick={handleClickDecrement}>
          {" "}
          <IoMdRemove />
        </AddRemoveButton>
        <Counter value={counter} />
        <AddRemoveButton onClick={handleClickIncrement}>
          {" "}
          <IoMdAdd />
        </AddRemoveButton>
        {/* <Counter /> */}
        <Price>{product.price * counter}</Price>
        <Button onClick={addToCart}>Add to cart </Button>
      </DetailInfo>
    </ProductDetail>
  );
};

export default Product;
