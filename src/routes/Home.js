import styled from "styled-components";
import { motion, useViewportScroll, useAnimation, useTransform } from "framer-motion";
import { useEffect } from "react";
import { connect } from "react-redux";
import Product from "../components/Product";


const Wrapper = styled.div`
  height: 100%;
`;

const Banner = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  overflow: hidden;
  background: url(./images/home_bg.png) center center;
  h2 {
    position: absolute;
    color: ${props => props.theme.white.lighter};
    font-size: 100px;
    text-align: center;
    font-weight: 700;
    text-transform: uppercase;
    line-height: 1.2;
  }
`;

const CategoryCover = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding-top: 160px;
`;

const NewArrivals = styled.div`
  display: grid;
  gap: 0 20px;
  grid-template-columns: repeat(3, 1fr);
  width: 1096px;
  margin-top: 40px;
`;

const BestSellers = styled.div`
  display: grid;
  gap: 0 20px;
  grid-template-columns: repeat(4, 1fr);
  width: 1096px;
`;

const TitleCover = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Title = styled.h2`
  color: ${props => props.theme.main};
  font-size: 40px;
  font-weight: 700;
  text-align: center;
`;

const BrandStroy = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 160px;
`;

const StroyCover = styled.div`
  display: flex;
  align-items: center;
  width: 1096px;
  margin-bottom: 60px;
  div {
    width: 50%;
    height: 450px;
    overflow: hidden;
    img {
      width: 100%;
      transition: 0.5s ease-in-out;
    }
    &:hover img{
      transform: scale(1.05);
    }
  }
`;

const LeftImg = styled.div`
  border-top-right-radius: 100px;
`;

const RightImg = styled.div`
  border-top-left-radius: 100px;
`;

const Col = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 50%;
  padding: 0 40px;
  color: ${props => props.theme.black.darker};
  h4 {
    font-size: 24px;
    font-weight: 700;
    margin-bottom: 30px;
  }
  p {
    font-size: 15px;
    line-height: 1.3;
  }
`;

const ToTheTop = styled(motion.span)`
  position: fixed;
  right: 60px;
  bottom: 60px;
  z-index: 1;
  width: 50px;
  height: 50px;
  padding: 16px 0;
  cursor: pointer;
  font-size: 14px;
  text-align: center;
  border-radius: 50%;
  border: 1px solid ${props => props.theme.black.lighter};
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
      <CategoryCover>
        <Title>New Arrivals</Title>
        <NewArrivals>
          {products.slice(0, 3).map(product =>
            <Product key={product.title} product={product} />
          )}
        </NewArrivals>
      </CategoryCover>
      <CategoryCover>
        <BestSellers>
          <TitleCover>
            <Title style={{ transform: "rotate(-90deg)" }}>Best Sellers</Title>
          </TitleCover>
          {products.slice(3, 6).map(product =>
            <Product key={product.title} product={product} />
          )}
        </BestSellers>
      </CategoryCover>
      <BrandStroy>
        <StroyCover>
          <LeftImg>
            <img src="./images/product_07_1.jpg" alt="brandstory_1" />
          </LeftImg>
          <Col>
            <h4>Peanut plate & mug</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Massa tincidunt dui ut ornare lectus.<br /><br />Mattis vulputate enim nulla aliquet porttitor lacus luctus. Netus et malesuada fames ac turpis egestas integer eget aliquet.</p>
          </Col>
        </StroyCover>
        <StroyCover>
          <Col>
            <h4>Stone Incense Holder</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Massa tincidunt dui ut ornare lectus.<br /><br />Mattis vulputate enim nulla aliquet porttitor lacus luctus. Netus et malesuada fames ac turpis egestas integer eget aliquet.</p>
          </Col>
          <RightImg>
            <img src="./images/product_04_1.jpg" alt="brandstory_2" />
          </RightImg>
        </StroyCover>
      </BrandStroy>
    </Wrapper>
  );
}

const mapStateToProps = state => {
  return { products: state.shop.products }

  // return {
  //   bestSellers: state.shop.products.bestSellers,
  //   newProducts: state.shop.products.newProducts,
  // }
}

export default connect(mapStateToProps)(Home);