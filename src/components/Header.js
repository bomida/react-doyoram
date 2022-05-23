import { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Nav = styled.header`
  display: flex;
  align-items: center;
  position: fixed;
  top: 0;
  z-index: 10;
  width: 100%;
  padding: 20px 60px;
  background-color: ${props => props.theme.white.lighter};
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);
`;

const Logo = styled.h1`
  width: 100%;
  color: ${props => props.theme.main};
  font-family: 'Bodoni Moda';
  font-size: 20px;
  font-weight: 600;
  text-align: center;
`;

const RightMenu = styled.ul`
  display: flex;
  align-items: center;
  position: absolute;
  right: 60px;
  li {
    margin-left: 10px;
    font-size: 15px;
    transition: 0.2s ease-in;
    &:hover {
      color: ${props => props.theme.main};
    }
  }
`;

const CartNumber = styled.span`
  width: 22px;
  height: 22px;
  margin-left: 5px;
  padding: 4px;
  color: ${props => props.theme.white.lighter};
  font-family: 'Bodoni Moda';
  font-size: 14px;
  text-align: center;
  font-weight: 600;
  border-radius: 50%;
  background-color: ${props => props.theme.main};
`;

function Header({ cart }) {
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    let count = 0;
    cart.forEach(item => {
      count += item.qty
    })
    setCartCount(count)
  }, [cart, cartCount]);
  return (
    <Nav>
      <Logo><Link to="/react-doyoram">DOYORAM</Link></Logo>
      <RightMenu>
        <li><Link to="signup">Signup</Link></li>
        <li><Link to="cart">Cart</Link></li>
        <CartNumber>{cartCount}</CartNumber>
      </RightMenu>
    </Nav>
  );
}

const mapStateToProps = state => {
  return {
    cart: state.shop.cart
  }
}

export default connect(mapStateToProps)(Header);