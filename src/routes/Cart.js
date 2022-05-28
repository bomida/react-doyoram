import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import CartItem from "../components/CartItem";

const Wrapper = styled.div`
  height: 100vh;
  padding: 0 40px;

  ${({ theme }) => theme.tablet`
    height: 100%;
    padding: 0 40px;
  `};

  ${({ theme }) => theme.tablet`
    padding: 0 20px;
  `};
`;

const ListContainer = styled.div`
  max-width: 1024px;
  width: 100%;
  margin: 160px auto 0;
  font-size: ${props => props.theme.font.size.sm};
  tr:last-of-type {
    border-bottom: 1px solid ${props => props.theme.color.black.darker};
  }

  ${({ theme }) => theme.tablet`
    margin: 100px auto 0;
  `};
`;

const Title = styled.h3`
  margin-bottom: 40px;
  font-family: ${props => props.theme.font.family.serif};
  font-size: ${props => props.theme.font.size.title};
  font-weight: 700;
  text-align: center;

  ${({ theme }) => theme.tablet`
    margin-bottom: 20px;
    font-size: ${props => props.theme.font.size.xl};
  `};
`;

const CartTable = styled.table`
  width: 100%;
  border-bottom: 1px solid ${props => props.theme.color.black.darker};
`;

const CartHeader = styled.tr`
  height: 40px;
  font-size: ${props => props.theme.font.size.sm};
  border-bottom: 1px solid ${props => props.theme.color.black.darker};
  td {
    vertical-align: middle;
    text-align: center;
    &:nth-child(2) {
    }
  }
  
  ${({ theme }) => theme.mobile`
    height: 0;
    td {
      display: none;
    }
    font-size: ${props => props.theme.font.size.sm};
  `};
`;

const OrderTotal = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 30px;
  
  ${({ theme }) => theme.tablet`
    flex-direction: column;
  `};
`;

const CheckContainer = styled.div`
  display: flex;
  align-items: center;
  
  ${({ theme }) => theme.tablet`
    justify-content: flex-end;
    width: 100%;
  `};
`;

const SelectCount = styled.span`
  /* margin-left: 26px;
  margin-right: 41px; */
`;

const SelectCancleBtn = styled.button`
  all: unset;
  padding: 12px 24px;
  margin-left: 40px;
  color: ${props => props.theme.color.white.lighter};
  font-weight: bold;
  text-align: center;
  border-radius: 10px;
  background: ${props => props.theme.color.black.darker};
  transition: all 0.2s ease-in;
    &:hover {
      border-radius: 30px;
    }
    
  ${({ theme }) => theme.tablet`
    margin-left: 20px;
    padding: 8px 18px;

  `};
`;

const TotalPrice = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 480px;
  border-bottom: 1px solid ${props => props.theme.color.black.darker};
  span {
    &:last-of-type {
      font-weight: bold;
      font-size: ${props => props.theme.font.size.lg};
    }
  }

  ${({ theme }) => theme.tablet`
    justify-content: flex-end;
    width: 100%;
    margin-top: 30px;
    border-bottom: none;
    span {
      &:nth-child(2) {
        margin: 0 20px;
      }
    }
  `};
  ${({ theme }) => theme.tablet`
    margin-top: 20px;
  `};
`;

const OrderBtnContainer = styled.div`
  margin-top: 30px;
  text-align: right;
  button {
    all: unset;
    padding: 12px 24px;
    cursor: pointer;
    color: ${props => props.theme.color.main};
    border: 1px solid ${props => props.theme.color.main};
    border-radius: 10px;
    transition: all 0.2s ease-in;
    &:hover {
      color: ${props => props.theme.color.white.darker};
      background-color: ${props => props.theme.color.main};
      border-radius: 30px;
    }
  }

  ${({ theme }) => theme.tablet`
    margin-bottom: 60px;
    text-align: center;
    button {
      width: 100%;
      padding: 10px 0;
    }
`};
`;

function Cart({ cart }) {
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalItems, setTotalItems] = useState(0);

  useEffect(() => {
    let items = 0;
    let price = 0;

    cart.forEach(item => {
      items += item.qty;
      price += item.qty * item.price;
    });

    setTotalItems(items);
    setTotalPrice(price);
  }, [cart, totalPrice, setTotalPrice, totalItems, setTotalItems]);

  const navigate = useNavigate();
  const handleBuy = () => {
    if (totalItems >= 1) {
      alert("로그인을 해주세요");
      navigate("/signup");
    }
  }

  return (
    <Wrapper>
      <ListContainer>
        <Title>Cart</Title>
        <CartTable>
          <tbody>
            <CartHeader>
              <td>
                <input type="checkbox" />
              </td>
              <td>
                <span>전체 선택 0/{cart.length}</span>
              </td>
              <td>
                <span>상품정보</span>
              </td>
              <td>
                <span>수량</span>
              </td>
              <td>
                <span>상품금액</span>
              </td>
              <td />
            </CartHeader>
            {cart.map(item =>
              <CartItem key={item.id} itemData={item} />
            )}
          </tbody>
        </CartTable>
        <OrderTotal>
          <CheckContainer>
            <SelectCount>전체선택 0/{cart.length}</SelectCount>
            <SelectCancleBtn>선택 취소</SelectCancleBtn>
          </CheckContainer>
          <TotalPrice>
            <span>Total Price</span>
            <span>Total ({totalItems} item)</span>
            <span>{totalPrice.toLocaleString()} won</span>
          </TotalPrice>
        </OrderTotal>
        <OrderBtnContainer>
          <button onClick={handleBuy}>ORDER</button>
        </OrderBtnContainer>
      </ListContainer>
    </Wrapper>
  );
}

const mapStateToProps = ({ shop }) => {
  return {
    cart: shop.cart,
  }
}

export default connect(mapStateToProps)(Cart);