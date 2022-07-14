# Doyoram-shoppingmall

<br>

## 소개
리액트로 회원가입 기능과 장바구니 기능을 구현한 쇼핑몰 입니다.
[결과물 확인하기](https://bomida.github.io/react-doyoram/)

<br>

## 최종 결과물
### Home
<img width="640" alt="Home" src="https://user-images.githubusercontent.com/93115007/169842895-6490c674-c41c-4cc1-91a4-f79caab22dca.png">

### Product List - New Arrivals
<img width="640" alt="ProductList1" src="https://user-images.githubusercontent.com/93115007/169842928-8a5e0353-b12e-4322-a0c1-e5f1eec7feae.png">

### Product List - Best Sellers
<img width="640" alt="ProductList2" src="https://user-images.githubusercontent.com/93115007/169842940-f97ec439-70b1-4943-b782-72d7bf942ba0.png">

### Product Detail
<img width="640" alt="ProductDetail" src="https://user-images.githubusercontent.com/93115007/169842960-8028fcf1-c952-429d-b923-ac8a307e5981.png">

### Cart
<img width="640" alt="Cart" src="https://user-images.githubusercontent.com/93115007/169842966-7f0b31e7-4313-486a-ab2d-b0bc79cd7dc2.png">

### Sign Up
<img width="640" alt="Login" src="https://user-images.githubusercontent.com/93115007/169842946-fdc62c54-8120-4dd2-a7c4-54e6b65ad826.png">


<br>

## 구현 기능
  - 스크롤 시 Banner의 배경과 타이틀이 동적으로 움직입니다.
  - API에서 데이터를 가지고 오는 방식과 비슷하게 보이기 위해 DB 파일에 오브젝트 형식으로 상품에 대한 정보들을 저장하고, map 함수를 사용해 상품을 보여줍니다.
  - 리덕스를 이용해 add cart를 클릭 시 상품을 장바구니에 추가하고,<br/>
  header에 cart에 담겨있는 상품의 갯수를 보여줍니다.
  - 상품을 클릭 시 상품 상세 페이지로 이동하여, 해당 상품의 정보를 가져와 화면에 보여주었습니다.
  - 상세 페이지에서 수량을 변경하면 총 금액과 총 갯수가 보여지고, 변경한 갯수 만큼 카트에 담을 수 있습니다.
  - Cart 페이지에서 추가된 상품의 디테일을 확인할 수 있고, 담은 상품을 삭제하거나 수량을 수정할 수 있고, 총 합산 금액을 보여줍니다.
  - 회원가입 폼을 만들어 정보를 입력하면 유효성 검사를 하고, 모두 통과가 되면 이전 화면으로 돌아가게되고, 오류가 있다면 해당 오류 메시지를 보여주도록 합니다.
  - laptop, tablet, mobile 환경에 대한 반응형 웹 적용

<br>

## 사용 기능
  ### React
  - useState, useNavigate, react-router-dom
  - useNavigate를 이용해 유효성 검사가 모두 끝난 후 submit을 하게 되면 회원가입 이전의 페이지로 돌아도록 합니다.
  ### styled-component
  - JSX에 직접 style을 설정하지 않고, styled-component를 이용하여 JSX의 하위 테그도 함께 style을 적용하였습니다.
  - ThemeProvider를 이용하여 컬러와 폰트 사이즈, 폰트 페밀리, 디바이스 사이즈 객체를 만들어 효율적으로 관리하였습니다.
  - 미디어 쿼리를 자체를 모듈화 하여 반응형 웹을 적용하였습니다.
  ### Redux / React-Redux
  - redux를 사용해 장바구니에 상품을 추가, 삭제하는 기능과 수량을 변경 했을 때 총 합계가 변경되고, 장바구니에 추가된 항목들을 로드해주는 기능을 적용했습니다.
  ### Framer Motion
  - 스크롤 시 Banner의 배경과 타이틀의 위치가 동적으로 움직이도록 했습니다.
  - 썸네일 호버 시 컨텐츠 scale이 변경되고, title이 보이도록 하였습니다.
  - `layoutId`를 사용하여 컨텐츠 클릭 시 모달창이 부드럽게 뜨도록 하였습니다.
  ### React Hook Form
  - 각  Input 태그에 id, email, password 등을 입력을 필수로 입력받게 합니다.
  - validation을 사용해 id의 최소 입력 글자수와 이메일 형식인지 아닌지를 체크하고, 비밀번호와 비밀번호 확인에 입력된 값을 비교해 일치한지 확인 합니다.
  - 하나의 항목이라도 오류가 나면 무슨 내용의 오류인지 메시지를 보여줍니다.

<br>

## 추가 예정 사항
  - [x] 반응형 웹 적용
  - [x] 상품 디테일 페이지 추가
  - [ ] 체크박스 전체 선택 또는 선택 해제 기능
  - [ ] 장바구니 담기 버튼 클릭 시 confirm창 띄우고, 계속 쇼핑 또는 장바구니 페이지 이동
  - [ ] 회원가입 페이지 제작

<br>

## 문제 사항
  - [x] Cart 페이지에서 수량 수정 시 장바구니의 수량이 변경됨
  - [x] CartItem의 아이템 수량 변경 시 수량에 따른 total 가격 업데이트가 되지 않는 부분 수정
  - [x] Git Pages를 개설 후 이미지 경로 오류가 나서 제대로 로드 되지 않는 문제가 발생 
    <br /> ->  public 폴더에서 src 폴더로 이동 시켜줍니다. img 태그에서는 request로 불러오고, css background에서는 bg라는 prop으로 값을 전달해주었습니다.

<br>

## 개발 환경
  - 개발도구: VSCode, Github
  - 사용언어: ReactJS

  <br>

## 레퍼런스
  - [react hook form](https://react-hook-form.com/kr/advanced-usage/)
  - [리덕스 장바구니 기능 구현](https://tobegood.tistory.com/entry/43-44일차-React-상태관리-Redux)
  - [DOYORAM 이미지 출처](https://www.doyoramseoul.co.kr)