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
`;

const CheckColumn = styled.td`
  width: 80px;
`;

const ImgColumn = styled.td`
  width: 180px;
`;

const Img = styled.img`
  width: 56px;
  height: 56px;
`;

const ProductInfo = styled.td`
  p {
    padding-left: 30px;
    color: ${props => props.theme.color.black.darker};
    text-align: left;
    &:first-of-type {
      margin-bottom: 8px;
      font-weight: bold;
      font-size: 18px;
    }
    &:last-of-type {
      font-size: 15px;
    }
  }
`;

const Qty = styled.input`
  width: 40px;
  margin-left: 5px;
`;

const DeleteCircle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 25px;
  height: 25px;
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
        <p>{itemData.price.toLocaleString()} won</p>
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
      <td>{totalPrice.toLocaleString()} won</td>
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