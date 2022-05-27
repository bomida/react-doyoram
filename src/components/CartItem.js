import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { adjustItemQty, deleteItem } from "../redux/cart/cartAction";
import DeleteIcon from "./DeleteIcon";

const Item = styled.tr`
  width: 100%;
  height: 90px;
  border-bottom: 1px solid ${props => props.theme.color.black.darker};
  td {
    vertical-align: middle;
    text-align: center;
    &:first-of-type {
      padding-left: 29px;
    }
  }

  ${({ theme }) => theme.tablet`
    td {
      padding: 10px 0;
      &:first-of-type {
        width: 20px;
        padding-left: 0px;
      }
    }
`};
`;

const CheckColumn = styled.td`
  width: 80px;
`;

const ImgColumn = styled.td`
  width: 180px;

  ${({ theme }) => theme.tablet`
    width: 80px;
  `};
`;

const Img = styled.img`
  width: 56px;
  aspect-ratio: 1/1;
`;

const ProductInfo = styled.td`
  p {
    padding-left: 30px;
    color: ${props => props.theme.color.black.darker};
    text-align: left;
    &:first-of-type {
      margin-bottom: 8px;
      font-weight: bold;
      font-size: ${props => props.theme.font.size.lg};
    }
    &:last-of-type {
      font-size: 15px;
    }
  }

  ${({ theme }) => theme.tablet`
    p {
      padding-left: 0px;
      &:first-of-type {
        margin-bottom: 0px;
        min-width: 100px;
        font-size: ${props => props.theme.font.size.base};
      }
      &:last-of-type {
        display: none;
      }
    }
  `};
`;

const Qty = styled.input`
  width: 40px;
  margin-left: 5px;

  ${({ theme }) => theme.tablet`
    width: 30px;
    margin: 0 10px;
  `};
`;

const DeleteCircle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 20px;
  height: 20px;
  margin-left: 10px;
  cursor: pointer;
  border: 1px solid ${props => props.theme.color.black.lighter};
  border-radius: 50%;
`;

function CartItem({ itemData, deleteItem, adjustItemQty }) {
  const [input, setInput] = useState(itemData.qty);
  const [totalPrice, setTotalPrice] = useState(itemData.price);

  const onChangeHandler = (event) => {
    setInput(event.target.value);
    adjustItemQty(itemData.id, event.target.value);
  };

  useEffect(() => {
    let itemQty = input;
    setTotalPrice(() => itemData.price * itemQty);
  }, [input, setTotalPrice, itemData.price]);

  return (
    <Item>
      <CheckColumn>
        <input type="checkbox" />
      </CheckColumn>
      <ImgColumn>
        <Img src={`${itemData.imgUrl1}`} alt={itemData.title} />
      </ImgColumn>
      <ProductInfo>
        <p><Link to={`/react-doyoram/${itemData.id}`}>{itemData.title}</Link></p>
        <p>{itemData.price.toLocaleString()} ₩</p>
      </ProductInfo>
      <td>
        <label htmlFor="qty">수량</label>
        <Qty
          min="1"
          id="qty"
          name="qty"
          type="number"
          value={input}
          onChange={onChangeHandler}
        />
      </td>
      <td>{totalPrice.toLocaleString()} ₩</td>
      <td>
        <DeleteCircle onClick={() => deleteItem(itemData.id)}>
          <DeleteIcon />
        </DeleteCircle>
      </td>
    </Item>
  );
}

const mapDispatchToProps = dispatch => {
  return {
    deleteItem: id => dispatch(deleteItem(id)),
    adjustItemQty: (id, value) => dispatch(adjustItemQty(id, value))
  }
}

export default connect(null, mapDispatchToProps)(CartItem);