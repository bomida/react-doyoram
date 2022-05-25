import { useEffect, useState } from "react";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { addItem, adjustItemQty } from "../redux/cart/cartAction";

const Wrapper = styled.div`
  max-width: 1096px;
  min-width: 900px;
  height: 100%;
  margin: 0 auto;
  padding: 160px 50px 60px;
`;

const InfoRow = styled.div`
  display: grid;
  gap: 0 20px;
  grid-template-columns: repeat(2, 1fr);
`;

const Thumbnail = styled.div`
  background: url(${props => props.bg}) center center;
  background-size: cover;
  aspect-ratio: 1/1;
`;

const TextInfo = styled.div`
  color: ${props => props.theme.color.black.darker};
`;

const Title = styled.h3`
  font-size: 40px;
  font-weight: 700;
`;

const Price = styled.p`
  margin: 20px 0 40px;
  font-size: 18px;
  font-weight: bold;
`;

const OverView = styled.p`
  color: ${props => props.theme.color.black.normal};
`;

const Qty = styled.input`
  width: 40px;
  margin: 30px 5px;
  color: ${props => props.theme.color.black.normal};
`;

const ResultContainer = styled.div`
  padding-top: 30px;
  border-top: 1px solid ${props => props.theme.color.black.lighter};
`;

const Result = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 15px;
  color: ${props => props.theme.color.black.normal};
`;

const OrderBtnContainer = styled.div`
  display: grid;
  gap: 10px;
  grid-template-columns: repeat(2, 1fr);
  margin-top: 50px;
  text-transform: uppercase;
  button {
    all: unset;
    padding: 12px 30px;
    text-align: center;
    cursor: pointer;
    color: ${props => props.theme.color.white.lighter};
    background-color: ${props => props.theme.color.black.normal};
    border-radius: 10px;
    transition: all 0.2s ease-in;
    &:hover {
      border-radius: 30px;
    }
  }
`;

function Detail({ products, addItem }) {
  const { productId } = useParams();
  const productItem = products.find(product => {
    return productId === product.id;
  });

  const [input, setInput] = useState(1);
  const [newPrice, setNewPrice] = useState(productItem.price);
  const onChangeHandler = event => {
    setInput(event.target.value);
    adjustItemQty(productId, event.target.value);
  }

  const handleAddItem = () => addItem(productItem.id, +input);

  useEffect(() => {
    let itemQty = input;
    setNewPrice(() => productItem.price * itemQty);
  }, [input, setNewPrice, productItem.price]);

  return (
    <Wrapper>
      <InfoRow>
        <Thumbnail bg={productItem.imgUrl1} />
        <TextInfo>
          <Title>{productItem.title}</Title>
          <Price>{productItem.price.toLocaleString()} won</Price>
          <OverView>{productItem.overview}</OverView>
          <label htmlFor="qty">수량</label>
          <Qty
            min="1"
            id="qty"
            name="qty"
            type="number"
            value={input}
            onChange={onChangeHandler}
          />
          <ResultContainer>
            <Result>
              <span>Total Price</span>
              <span>{newPrice.toLocaleString()} won</span>
            </Result>
            <Result>
              <span>Total Item</span>
              <span>{input} ea</span>
            </Result>
          </ResultContainer>
          <OrderBtnContainer>
            <button onClick={handleAddItem}>add cart</button>
            <button>order</button>
          </OrderBtnContainer>
        </TextInfo>
      </InfoRow>
    </Wrapper>
  );
}

const mapStateToProps = ({ shop }) => {
  return { products: shop.products }
}

const mapDispatchToProps = dispatch => {
  return {
    addItem: (id, qty) => dispatch(addItem(id, qty)),
    adjustItemQty: (id, value) => dispatch(adjustItemQty(id, value))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Detail);