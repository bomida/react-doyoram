import styled from "styled-components";


const Wrapper = styled.div`
  input {
    display: none;
  }
`;
const Label = styled.label`

  span {
    display: block;
    width: 20px;
    height: 3px;
    margin-bottom: 4px;
    border-radius: 10px;
    background-color: ${props => props.theme.color.black.darker};
  }
`;

function NavToggle() {
  return (
    <Wrapper>
      <input type="checkbox" id="navToggle" />
      <Label htmlFor="navToggle">
        <span></span>
        <span></span>
        <span></span>
      </Label>
    </Wrapper>
  );
}

export default NavToggle;