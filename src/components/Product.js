import { connect } from "react-redux";
import styled from "styled-components";
import { addItem } from "../redux/cart/cartAction";
import { Link } from "react-router-dom";

const ItemCover = styled.div`
  color: ${props => props.theme.color.black.darker};
  h4 {
    font-family: ${props => props.theme.font.family.serif};
    font-size: 18px;
    font-weight: 700;
  }
  p {
    font-size: 15px;
    margin: 10px 0;
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
  const handleAddItem = () => addItem(product.id, 1);

  return (
    <ItemCover key={product.id}>
      <Link to={`/react-doyoram/${product.id}`}>
        <ItemImg bg={`${product.imgUrl1}`} />
        <h4>{product.title}</h4>
      </Link>
      <p>{product.price.toLocaleString()} won</p>
      <button onClick={handleAddItem}>add cart</button>
    </ItemCover>
  );
}

const mapDispatchToProps = dispatch => {
  return {
    addItem: (id, qty) => dispatch(addItem(id, qty))
  }
}

export default connect(null, mapDispatchToProps)(Product);