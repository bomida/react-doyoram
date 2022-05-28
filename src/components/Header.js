import { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Nav = styled.header`
  position: fixed;
  top: 0;
  z-index: 10;
  width: 100%;
  height: 70px;
  padding: 24px 60px;
  background-color: ${props => props.theme.color.white.lighter};
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);

  ${({ theme }) => theme.tablet`
    height: ${props => props.toggleMenu ? "auto" : "60px"};
    padding: 20px 0;
  `};
`;

const Logo = styled.h1`
  position: absolute;
  left: 0;
  width: 100%;
  margin: 0 auto;
  color: ${props => props.theme.color.main};
  font-family: ${props => props.theme.font.family.serif};
  font-size: ${props => props.theme.font.size.lg};
  font-weight: 600;
  text-align: center;

  ${({ theme }) => theme.tablet`
    padding-bottom: 20px;
    position: relative;
    border-bottom: 1px solid #eee;
  `};
`;

const RightMenu = styled.ul`
  display: flex;
  align-items: center;
  position: absolute;
  right: 60px;
  li {
    height: 18px;
    margin-left: 10px;
    transition: 0.2s ease-in;
    &:hover {
      color: ${props => props.theme.color.main};
    }
  }
  ${({ theme }) => theme.tablet`
      display: ${props => props.toggleMenu ? "flex" : "none"};
      flex-direction: column;
      position: relative;
      right: 0;
      li {
        margin-top: 15px;
      }
  `};
`;

const CartNumber = styled.span`
  display: inline-block;
  width: 20px;
  height: 20px;
  margin-left: 5px;
  padding: 4px;
  color: ${props => props.theme.color.white.lighter};
  font-family: ${props => props.theme.font.family.serif};
  font-size: ${props => props.theme.font.size.sm};
  text-align: center;
  font-weight: 600;
  border-radius: 50%;
  background-color: ${props => props.theme.color.main};
`;

const ToggleBtn = styled.div`
  display: none;
  cursor: pointer;
  span {
    display: block;
    width: 20px;
    height: 3px;
    margin-bottom: 4px;
    border-radius: 10px;
    background-color: ${props => props.theme.color.black.darker};
    transition: all .2s ease-in;
    &:nth-of-type(3) {
      margin-bottom: 0px;
    }
  }

  ${({ theme }) => theme.tablet`
    display: block;
    position: absolute;
    top: 20px;
    right: 30px;
  `};
  ${({ theme }) => theme.mobile`
    right: 20px;
  `};
`;


function Header({ cart }) {
  const [cartCount, setCartCount] = useState(0);
  const [toggleMenu, setToggleMenu] = useState(false);
  const toggleNav = () => {
    setToggleMenu(!toggleMenu);
  }

  useEffect(() => {
    setCartCount(cart.length);
  }, [cart, setCartCount]);

  return (
    <Nav toggleMenu={toggleMenu}>
      <Logo>
        <Link to="/react-doyoram">DOYORAM</Link>
      </Logo>
      <RightMenu toggleMenu={toggleMenu}>
        <li>
          <Link to="signup">Signup</Link>
        </li>
        <li>
          <Link to="cart">Cart</Link>
          <CartNumber>{cartCount}</CartNumber>
        </li>
      </RightMenu>
      <ToggleBtn onClick={toggleNav}>
        <span></span>
        <span></span>
        <span></span>
      </ToggleBtn>
    </Nav>
  );
}

const mapStateToProps = state => {
  return {
    cart: state.shop.cart
  }
}

export default connect(mapStateToProps)(Header);