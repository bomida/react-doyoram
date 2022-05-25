import styled from "styled-components";

const IconWrap = styled.div`
  position: relative;
  width: 20px;
  height: 20px;
  top: 9px;
  span {
    position: absolute;
    display: block;
    height: 2px;
    width: 14px;
    left: 0;
    right: 0;
    margin: auto;
    background-color: ${props => props.theme.color.black.lighter};
  }
`;

const Span1 = styled.span`
  transform: rotate(-50deg);
`;

const Span2 = styled.span`
  transform: rotate(50deg);
`;


function DeleteIcon() {
  return (
    <IconWrap>
      <Span1></Span1>
      <Span2></Span2>
    </IconWrap>
  );
}

export default DeleteIcon;