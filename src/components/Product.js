import { connect } from "react-redux";
import styled from "styled-components";
import { addItem } from "../redux/cart/cartAction";

const ItemCover = styled.div`
  color: ${props => props.theme.black.darker};
  h4 {
    font-size: 18px;
    margin-bottom: 10px;
  }
  p {
    font-size: 15px;
    margin-bottom: 10px;
  }
  button {
    all: unset;
    cursor: pointer;
  }
`;

const ItemImg = styled.div`
  width: 100%;
  aspect-ratio: 1/1;
  margin-bottom: 30px;
  background: url(${props => props.bg});
  background-size: cover;
  transition: all 0.2s ease-in-out;
  &:hover {
    border-radius: 50%;
  }
`;

function Product({ product, addItem }) {
  return (
    <ItemCover key={product.title}>
      <ItemImg bg={`${product.imgUrl1}`} />
      <h4>{product.title}</h4>
      <p>{product.price.toLocaleString()} won</p>
      <button onClick={() => addItem(product.id)}>add cart</button>
    </ItemCover>
  );
}

const mapDispatchToProps = dispatch => {
  return {
    addItem: (id) => dispatch(addItem(id))
  }
}

export default connect(null, mapDispatchToProps)(Product);