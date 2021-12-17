import React from "react";
import { Img, Title, Price, Product } from "./Item.style";
import { useHistory } from "react-router";

const Item = ({ id, title, image, price }) => {
  const history = useHistory();
  return (
    <>
      <Product>
        <Title>{title}</Title>
        <Img
          src={image}
          alt="{title}"
          onClick={() => history.push(`/product/${id}`)}
        />
        <Price>{price}</Price>
      </Product>
    </>
  );
};

export default Item;
