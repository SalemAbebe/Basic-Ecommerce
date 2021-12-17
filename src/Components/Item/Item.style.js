import styled from "styled-components";

export const Product = styled.div`
  width: 400px;
  margin-left: 10px;
  margin-right: 10px;
  margin-top: 25px;
  background: rgba(255, 255, 255, 0.25);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.18);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-left: 10px;
  padding-right: 10px;
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
export const Img = styled.img`
  cursor: pointer;
  width: 100%;
  max-height: 270px;
  object-fit: contain;
  margin-top: 35px;
  transition: transform 300ms ease-in;
  @media (min-width: 991px) {
    min-height: 200px;
  }
  &:hover {
    transform: scale(1.1);
  }
`;

export const InfoContainer = styled.div`
  margin-top: 20px;
  margin-bottom: 20px;
  display: flex;
  justify-content: space-around;
  align-items: center;
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
