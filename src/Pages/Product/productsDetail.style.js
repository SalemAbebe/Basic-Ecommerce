import styled from "styled-components";

export const ProductDetail = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  height: 630px;
`;
export const ProductImg = styled.div`
  height: 600px;
  width: 500px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-top: 25px;
  box-shadow: 0 8px 32px 0 rgba(108, 122, 137, 0.37);
`;
export const Img = styled.img`
  cursor: pointer;
  width: 100%;
  max-height: 270px;
  object-fit: contain;
  margin-top: 55px;
  //   transition: transform 300ms ease-in;
  //   // transform: scale(1);
  //   @media (min-width: 991px) {
  //     min-height: 200px;
  //   }
  //   &:hover {
  //     transform: scale(1.1);
  //   }
`;
export const Category = styled.div`
  text-align: center;
  padding-left: 20px;
  padding-right: 20px;
`;
export const Title = styled.h1`
  font-weight: 700;
  font-size: 25px;
  color: $gray-medium;
  padding: 0 16px;
  margin-top: 20px;
  text-align: center;
  line-height: 25px;
  margin-bottom: 8px;
`;
export const DetailInfo = styled.div`
  width: 500px;
  height: 600px;
  padding-top: 100px;
  box-shadow: 0 8px 32px 0 rgba(108, 122, 137 0.37);
  flex-direction: column;
  justify-content: space-between;
  text-align: center;
`;
export const Price = styled.div`
  font-size: 22px;
  font-weight: 700;
  line-height: 22px;
  color: $gray-medium;
  padding: 20px 16px 0;
  text-align: center;
  margin-bottom: 16px;
  &:before {
    content: "$";
  }
`;
export const Description = styled.div`
  margin: 30px;
  padding-left: 30px;
  text-align: left;
  padding-right: 20px;
`;
export const Counter = styled.input`
  width: 35px;
  height: 25px;
  text-align: center;
  margin: 0 8px;
`;
export const Button = styled.button`
  background: Gray;
  color: white;
  padding: 10px 25px;
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.18);
  &:hover {
    cursor: pointer;
  }
`;
export const AddRemoveButton = styled.button`
  background: Gray;
  color: white;
  padding: 8px;
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.18);
  &:hover {
    cursor: pointer;
    margin: 20px;
  }
`;
