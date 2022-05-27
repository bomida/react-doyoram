import styled from "styled-components";
import { motion, useViewportScroll, useAnimation, useTransform } from "framer-motion";
import { useEffect } from "react";
import { connect } from "react-redux";
import Product from "../components/Product";
import homeBg from "../images/home_bg.png";
import { brandStory } from "../db/db";


const Wrapper = styled.div`
  height: 100%;
`;

const Banner = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  overflow: hidden;
  background: url(${homeBg}) center center;
  h2 {
    position: absolute;
    color: ${props => props.theme.color.white.lighter};
    font-family: ${props => props.theme.font.family.serif};
    font-size: ${props => props.theme.font.size.banner};
    text-align: center;
    font-weight: 700;
    text-transform: uppercase;
    line-height: 1.2;
  }

  ${({ theme }) => theme.mobile`
    h2 {
      font-size: ${props => props.theme.font.size.title};
    }
  `};
`;

const SectionCover = styled.section`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 120px 40px 0;

  ${({ theme }) => theme.tablet`
    padding: 80px 40px 0;
  `};

  ${({ theme }) => theme.mobile`
    padding: 60px 20px 0;
  `};
`;

const NewArrivals = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  max-width: 1024px;
  width: 100%;
  margin-top: 60px;

  ${({ theme }) => theme.tablet`
    grid-template-columns: repeat(1, 1fr);
    gap: 60px;
  `};

  ${({ theme }) => theme.mobile`
    grid-template-columns: repeat(1, 1fr);
    margin-top: 40px;
  `};
`;

const BestSellers = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  max-width: 1024px;
  width: 100%;

  ${({ theme }) => theme.tablet`
    grid-template-columns: repeat(1, 1fr);
    gap: 60px;
    `};

  ${({ theme }) => theme.mobile`
    gap: 40px;
    grid-template-columns: repeat(1, 1fr);
  `};
`;

const BrandStory = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 60px;
  max-width: 1024px;
  width: 100%;
  height: 100%;
  margin-bottom: 100px;

  ${({ theme }) => theme.tablet`
    grid-template-columns: repeat(1, 1fr);
    margin-bottom: 80px;
  `};

  ${({ theme }) => theme.mobile`
    grid-template-columns: repeat(1, 1fr);
    margin-bottom: 60px;
  `};
`;

const Title = styled.h2`
  color: ${props => props.theme.color.main};
  font-family: ${props => props.theme.font.family.serif};
  font-size: ${props => props.theme.font.size.title};
  font-weight: 700;
  text-align: center;

  ${({ theme }) => theme.mobile`
    font-size: ${props => props.theme.font.size.xl};
  `};
`;

const TitleCover = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  transform: rotate(-90deg);

  ${({ theme }) => theme.tablet`
    grid-template-columns: repeat(1, 1fr);
    transform: rotate(0deg);
  `};
`;

const StoryImg = styled.div`
  overflow: hidden;
  aspect-ratio: 1/0.95;
  border-top-left-radius: 50%;
  border-top-right-radius: 50%;
    img {
      width: 100%;
      transition: 0.5s ease-in-out;
    }
    &:hover img{
      transform: scale(1.05);
    }
`;

const Col = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  height: 100%;
  color: ${props => props.theme.color.black.darker};
  h4 {
    font-family: ${props => props.theme.font.family.serif};
    font-size: ${props => props.theme.font.size.xl};
    font-weight: 700;
    margin-bottom: 40px;
  }
  p {
    line-height: 1.5;
  }

  ${({ theme }) => theme.tablet`
    display: block;
    h4 {
      margin-bottom: 30px;
    }
  `};
`;

const ToTheTop = styled(motion.span)`
  position: fixed;
  right: 60px;
  bottom: 60px;
  z-index: 1;
  width: 46px;
  height: 46px;
  padding: 14px 0;
  cursor: pointer;
  font-size: ${props => props.theme.font.size.sm};
  text-align: center;
  border-radius: 50%;
  border: 1px solid ${props => props.theme.color.black.lighter};
  background-color: rgba(255, 255, 255, 0.8);
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.1);
  
  ${({ theme }) => theme.mobile`
    right: 30px;
    bottom: 30px;
  `};
`;

const showUp = {
  initial: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      duration: 1,
      delay: 0.5,
    }
  }
}

const TopBtnMotion = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
  },
}

function Home({ products }) {
  const scrollTop = () => document.documentElement.scrollTop = 0;
  const TopBtnAnimation = useAnimation();
  const { scrollY } = useViewportScroll();
  const marginTop = useTransform(
    scrollY,
    [0, 400], [0, -200]
  );
  const backgroundPositionY = useTransform(
    scrollY,
    [0, 900], ["0px", "-80px"]
  );

  useEffect(() => {
    scrollY.onChange(() => {
      // console.log(scrollY.get())
      if (scrollY.get() > 550) {
        TopBtnAnimation.start("show");
      } else {
        TopBtnAnimation.start("hidden");
      }
    });
  }, [TopBtnAnimation, scrollY]);

  return (
    <Wrapper>
      <ToTheTop
        onClick={scrollTop}
        variants={TopBtnMotion}
        initial="hidden"
        animate={TopBtnAnimation}
        transition={{ duration: 0.3 }}
      >Top
      </ToTheTop>
      <Banner style={{ backgroundPositionY }}>
        <motion.h2
          style={{ marginTop }}
          variants={showUp}
          initial="initial"
          animate="show"
        >
          we bake<br />dishes
        </motion.h2>
      </Banner>
      <SectionCover>
        <Title>New Arrivals</Title>
        <NewArrivals>
          {products.slice(0, 3).map(product =>
            <Product key={product.id} product={product} />
          )}
        </NewArrivals>
      </SectionCover>
      <SectionCover>
        <BestSellers>
          <TitleCover>
            <Title>Best Sellers</Title>
          </TitleCover>
          {products.slice(3, 6).map(product =>
            <Product key={product.id} product={product} />
          )}
        </BestSellers>
      </SectionCover>
      <SectionCover>
        {brandStory.map(story =>
          <BrandStory key={story.imgUrl}>
            <StoryImg>
              <img src={require(`../images/brandStory_${story.imgUrl}.jpg`)} alt={story.imgUrl} />
            </StoryImg>
            <Col>
              <h4>{story.title}</h4>
              <p>{story.overview}</p>
            </Col>
          </BrandStory>
        )}
      </SectionCover>
    </Wrapper>
  );
}

const mapStateToProps = ({ shop }) => {
  return { products: shop.products }
}

export default connect(mapStateToProps)(Home);