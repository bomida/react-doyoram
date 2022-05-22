# react-Doyoram-shoppingmall

<br>

## 소개
리액트를 이용해 쇼핑몰을 제작하고, 리덕스로 장바구니 기능을 구현하였습니다.<br/>
그리고 react hook form으로 회원가입 폼을 만들었습니다.

<br>

## 최종 결과물
### Home
<img width="640" alt="Home" src="https://user-images.githubusercontent.com/93115007/168476772-f09a6283-7b96-45ae-8f4e-b2ab514dfded.png">

### Product List - New Arrivals
<img width="640" alt="ProductList1" src="https://user-images.githubusercontent.com/93115007/168476782-2cacd01d-220d-454d-b073-172afe0844e2.png">

### Product List - Best Sellers
<img width="640" alt="ProductList2" src="https://user-images.githubusercontent.com/93115007/168476784-4bf37b60-2f40-4649-9852-569bc1051310.png">

### Cart
<img width="640" alt="Cart" src="https://user-images.githubusercontent.com/93115007/168476785-4d8f70ae-b00e-48d6-899a-2a691c65ced0.png">

### Login
<img width="640" alt="Login" src="https://user-images.githubusercontent.com/93115007/168476786-37519515-fd58-4289-99a3-6f50ba5a3150.png">


<br>

## 구현 기능
  - 스크롤 시 Banner의 배경과 타이틀의 위치가 동적으로 움직입니다.
  - db 파일로 부터 저장된 제품의 정보를 가져와 제품 목록을 보여줍니다.
  - 리덕스를 이용해 add Item을 클릭 시 상품을 장바구니에 추가하고, header에 상품이 몇개가 담겨있는지 뱃지에 갯수를 보여줍니다.
  - Cart 페이지에서 추가된 상품의 디테일을 확인할 수 있고, 담은 상품을 삭제하거나 수량을 수정할 수 있고, 총 합산 금액을 보여줍니다.
  - 회원가입 폼을 만들어 정보를 입력하면 유효성 검사를 하고, 모두 통과가 되면 이전 화면으로 돌아가게되고, 오류가 있다면 해당 오류 메시지를 보여주도록 합니다.

<br>

## 사용 기능
  ### React
  - useState, useNavigate, react-router-dom
  - useNavigate를 이용해 유효성 검사가 모두 끝난 후 submit을 하게 되면 회원가입 이전의 페이지로 돌아도록 합니다.
  ### styled-component
  - JSX에 직접 style을 설정하지 않고, styled-component를 이용하여 JSX의 하위 테그도 함께 style을 적용하였습니다.
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

## 추가사항
  - [ ] 체크박스 전체 선택 또는 선택 해제 기능

<br>

## 문제 사항
  - [ ] Cart 페이지에서 수량 수정 시 장바구니의 수량이 변경됨
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