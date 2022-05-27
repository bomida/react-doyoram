import { useEffect, useState } from "react";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import CartItem from "../components/CartItem";

const Wrapper = styled.div`
  height: 100vh;

  ${({ theme }) => theme.mobile`
    height: 100%;
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
`;

const Title = styled.h3`
  margin-bottom: 40px;
  font-family: ${props => props.theme.font.family.serif};
  font-size: ${props => props.theme.font.size.title};
  font-weight: 700;
  text-align: center;
`;

const ItemsCover = styled.div``;

const CartHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 40px;
  padding: 0 60px;
  border-bottom: 1px solid ${props => props.theme.color.black.darker};
`;

const OrderTotal = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 30px;
  background-color: greenyellow;
`;

const CheckContainer = styled.div`
  display: flex;
  align-items: center;
  padding-left: 30px;
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
  color: ${props => props.theme.color.white.lighter};
  font-weight: bold;
  text-align: center;
  border-radius: 10px;
  background: ${props => props.theme.color.black.darker};
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
  border-bottom: 1px solid ${props => props.theme.color.black.darker};
  span {
    &:first-of-type {
    }
    &:last-of-type {
      font-weight: bold;
      font-size: ${props => props.theme.font.size.xl};
    }
  }
`;

const OrderBtnContainer = styled.div`
  margin-top: 30px;
  text-align: right;
  button {
    all: unset;
    /* margin: 20px auto 0; */
    padding: 12px 30px;
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
        <ItemsCover>
          <CartHeader>
            <input type="checkbox" />
            <span>전체 선택 0/{cart.length}</span>
            <span>상품정보</span>
            <span>수량</span>
            <span>상품금액</span>

          </CartHeader>
          {cart.map(item =>
            <CartItem key={item.id} itemData={item} />
          )}
        </ItemsCover>
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