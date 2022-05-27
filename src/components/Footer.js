import { Link } from "react-router-dom";
import styled from "styled-components";

const FooterWrap = styled.footer`
  width: 100%;
  padding: 80px 60px;
  background-color: ${props => props.theme.color.white.darker};
  p {
    font-size: 13px;
    line-height: 1.5;
  }
  ul {
    display: flex;
    margin-top: 20px;
    font-size: 13px;
    li {
      margin-right: 14px;
    }
  }
  ${({ theme }) => theme.tablet`
    padding: 40px 20px;
    li {
      margin-bottom: 10px;
    }
  `};
`;

function Footer() {
  return (
    <FooterWrap>
      <p>상호: 도요람 | 대표: 000 | 개인정보관리책임자: 000 | 전화: 미입력 | 이메일: doyoram@admin.com</p>
      <p>주소: 서울특별시 000구 000000길 5-10 | 사업자등록번호: 507-17-01018 | 통신판매: 제 2019-0000-0570 호</p>
      <ul>
        <li><Link to="/">이용약관</Link></li>
        <li><Link to="/">개인정보처리방침</Link></li>
        <li><Link to="/">사업자정보확인</Link></li>
      </ul>
    </FooterWrap >
  );
}

export default Footer;