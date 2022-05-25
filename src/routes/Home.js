import styled from "styled-components";
import { motion, useViewportScroll, useAnimation, useTransform } from "framer-motion";
import { useEffect } from "react";
import { connect } from "react-redux";
import Product from "../components/Product";
import homeBg from "../images/home_bg.png";
import { brandStory } from "../db/db";
import BrandStory from "../components/BrandStory";


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
    h2{
      font-size: ${props => props.theme.font.size.title};
    }
  `};
`;

const SessionCover = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 160px 40px 0;
  ${({ theme }) => theme.tablet`
    padding: 100px 40px 0;
  `};
  ${({ theme }) => theme.mobile`
    padding: 60px 20px 0;
  `};
`;

const NewArrivals = styled.div`
  display: grid;
  gap: 0 20px;
  grid-template-columns: repeat(3, 1fr);
  max-width: 1024px;
  width: 100%;
  margin-top: 40px;

  ${({ theme }) => theme.mobile`
    grid-template-columns: repeat(1, 1fr);
    gap: 40px 0;
  `};
`;

const BestSellers = styled.div`
  display: grid;
  gap: 0 20px;
  grid-template-columns: repeat(4, 1fr);
  max-width: 1024px;
  width: 100%;
  ${({ theme }) => theme.mobile`
    grid-template-columns: repeat(1, 1fr);
    gap: 40px 0;
  `};
`;

const TitleCover = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  transform: rotate(-90deg);
  ${({ theme }) => theme.mobile`
      display: block;
      transform: rotate(0deg);
  `};
`;

const Title = styled.h2`
  color: ${props => props.theme.color.main};
  font-family: ${props => props.theme.font.family.serif};
  font-size: ${props => props.theme.font.size.title};
  font-weight: 700;
  text-align: center;
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
  background-color: rgba(255, 255, 255, 0.5);
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.1);
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
      <SessionCover>
        <Title>New Arrivals</Title>
        <NewArrivals>
          {products.slice(0, 3).map(product =>
            <Product key={product.id} product={product} />
          )}
        </NewArrivals>
      </SessionCover>
      <SessionCover>
        <BestSellers>
          <TitleCover>
            <Title>Best Sellers</Title>
          </TitleCover>
          {products.slice(3, 6).map(product =>
            <Product key={product.id} product={product} />
          )}
        </BestSellers>
      </SessionCover>
      <SessionCover>
        {brandStory.map(story =>
          <BrandStory key={story.imgUrl} story={story} />
        )}
      </SessionCover>
    </Wrapper>
  );
}

const mapStateToProps = ({ shop }) => {
  return { products: shop.products }
}

export default connect(mapStateToProps)(Home);