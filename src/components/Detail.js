import { useState } from "react";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { products } from "../db/db";
import { adjustItemQty } from "../redux/cart/cartAction";

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
  color: ${props => props.theme.black.darker};
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
  color: ${props => props.theme.black.normal};
`;

const Qty = styled.input`
  width: 40px;
  margin: 30px 5px;
  color: ${props => props.theme.black.normal};
`;

const ResultContainer = styled.div`
  padding-top: 30px;
  border-top: 1px solid ${props => props.theme.black.lighter};
`;

const Result = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 15px;
  color: ${props => props.theme.black.normal};
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
    color: ${props => props.theme.white.lighter};
    background-color: ${props => props.theme.black.normal};
    border-radius: 10px;
    transition: all 0.2s ease-in;
    &:hover {
      border-radius: 30px;
    }
  }
`;

function Detail() {
  const { productId } = useParams();
  const productItem = products.find(product => {
    return productId === product.id;
  });
  const [input, setInput] = useState(1);
  const onChangeHandler = event => {
    setInput(event.target.value);
    adjustItemQty(productId, event.target.value);
  }

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
              <span>30,000 won</span>
            </Result>
            <Result>
              <span>Total Item</span>
              <span>{input} ea</span>
            </Result>
          </ResultContainer>
          <OrderBtnContainer>
            <button>add cart</button>
            <button>order</button>
          </OrderBtnContainer>
        </TextInfo>
      </InfoRow>
    </Wrapper>
  );
}

const mapDispatchToProps = dispatch => {
  return {
    adjustItemQty: (id, value) => dispatch(adjustItemQty(id, value))
  }
}

export default connect(null, mapDispatchToProps)(Detail);