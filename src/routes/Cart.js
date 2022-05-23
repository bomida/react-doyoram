import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import CartItem from "../components/CartItem";

const Wrapper = styled.div`
  height: 100vh;
`;

const ListContainer = styled.div`
  width: 1096px;
  margin: 160px auto 0;
  tr:last-of-type {
    border-bottom: 1px solid ${props => props.theme.black.darker};
  }
`;

const Title = styled.h3`
  margin-bottom: 40px;
  font-family: 'Bodoni Moda';
  font-size: 40px;
  font-weight: 700;
  text-align: center;
`;

const CartTable = styled.table`
  width: 100%;
  border-bottom: 1px solid ${props => props.theme.black.darker};
`;

const CartHeader = styled.tr`
  height: 40px;
  border-bottom: 1px solid ${props => props.theme.black.darker};
  td {
    vertical-align: middle;
    text-align: center;
    &:first-of-type {
      padding-left: 29px;
    }
  }
`;

const OrderTotal = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 30px;
`;

const CheckContainer = styled.div`
  display: flex;
  align-items: center;
  padding-left: 30px;
  font-size: 15px;
`;

const SelectCount = styled.span`
  margin-left: 26px;
  margin-right: 41px;
`;

const CancleBtn = styled.button`
  all: unset;
  width: 110px;
  height: 40px;
  margin-left: 40px;
  color: ${props => props.theme.white.lighter};
  font-weight: bold;
  font-size: 15px;
  text-align: center;
  border-radius: 10px;
  background: ${props => props.theme.black.darker};
  transition: all 0.2s ease-in;
    &:hover {
      border-radius: 30px;
    }
`;

const TotalPrice = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 480px;
  padding: 0 40px 0 51px;
  border-bottom: 1px solid ${props => props.theme.black.darker};
  span {
    &:first-of-type {
      font-size: 15px;
    }
    &:last-of-type {
      font-weight: bold;
      font-size: 24px;
    }
  }
`;

const OrderBtnContainer = styled.div`
  margin-top: 30px;
  text-align: right;
  button {
    all: unset;
    margin: 20px auto 0;
    padding: 12px 30px;
    cursor: pointer;
    color: ${props => props.theme.main};
    border: 1px solid ${props => props.theme.main};
    border-radius: 10px;
    transition: all 0.2s ease-in;
    &:hover {
      color: ${props => props.theme.white.darker};
      background-color: ${props => props.theme.main};
      border-radius: 30px;
    }
  }
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
    console.log(cart)

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
            <CancleBtn>선택 취소</CancleBtn>
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