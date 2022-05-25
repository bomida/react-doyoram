import styled from "styled-components";


const StroyCover = styled.div`
  display: flex;
  align-items: center;
  max-width: 1024px;
  width: 100%;
  margin-bottom: 60px;
  div {
    width: 50%;
    overflow: hidden;
    aspect-ratio: 1/0.95;
    img {
      width: 100%;
      transition: 0.5s ease-in-out;
    }
    &:hover img{
      transform: scale(1.05);
    }
  }
  &:last-child {
    flex-direction: row-reverse;
  }
  ${({ theme }) => theme.mobile`
    flex-direction: column;
    div {
      width: 100%;
      aspect-ratio: unset;
    }
    &:last-child {
    flex-direction: column;
  }
  `};
`;

const StoryImg = styled.div`
  border-top-left-radius: 50%;
  border-top-right-radius: 50%;
`;

const Col = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 50%;
  padding: 0 40px;
  color: ${props => props.theme.color.black.darker};
  h4 {
    font-family: ${props => props.theme.font.family.serif};
    font-size: ${props => props.theme.font.size.title};
    font-weight: 700;
    margin-bottom: 40px;
  }
  p {
    line-height: 1.5;
  }
  ${({ theme }) => theme.tablet`
    padding: 0 20px;
    h4 {
      font-size: ${props => props.theme.font.size.xl};
      margin: 50px 0 20px;
    }
    p {
      font-size: ${props => props.theme.font.size.sm};
    }
  `};
  ${({ theme }) => theme.mobile`
    width: 100%;
    padding: 0;
  `};
`;

function BrandStory({ story }) {
  return (
    <StroyCover>
      <StoryImg>
        <img src={require(`../images/brandStory_${story.imgUrl}.jpg`)} alt={story.imgUrl} />
      </StoryImg>
      <Col>
        <h4>{story.title}</h4>
        <p>{story.overview}</p>
      </Col>
    </StroyCover>
  );
}

export default BrandStory;