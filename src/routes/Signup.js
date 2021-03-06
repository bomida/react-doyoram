import { useNavigate } from 'react-router-dom';
import { useForm } from "react-hook-form";
import styled from "styled-components";
import { useRef } from 'react';
import signUpBg from "../images/signUp_bg.jpg"

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-image: linear-gradient(180deg, rgba(255,255,255,0.4) 0%, rgba(255,255,255,0.4) 100%), url(${signUpBg});
  background-size: cover;
`;

const FormCover = styled.div`
  margin-top: 60px;
  h3 {
    margin-bottom: 50px;
    font-family: ${props => props.theme.font.family.serif};
    font-size: ${props => props.theme.font.size.title};
    font-weight: 700;
    text-align: center;
  }
  ${({ theme }) => theme.mobile`
    h3 {
      font-size: ${props => props.theme.font.size.xl};
    }
  `};
`;

const Form = styled.form`
  text-align: center;
  button {
    all: unset;
    display: block;
    margin: 30px auto 0;
    padding: 12px 30px;
    cursor: pointer;
    color: ${props => props.theme.color.white.lighter};
    border: 1px solid ${props => props.theme.color.white.lighter};
    border-radius: 10px;
    transition: all 0.2s ease-in;
    &:hover {
      color: ${props => props.theme.color.white.darker};
      border: 1px solid ${props => props.theme.color.main};
      background-color: ${props => props.theme.color.main};
      border-radius: 30px;
    }
  }
`;

const Title = styled.h4`
  font-weight: 700;
  color: ${props => props.theme.color.black.normal};
`;

const Input = styled.input`
  display: inline-block;
  width: 300px;
  margin: 10px 0 20px;
  padding: 7px;
  text-align: center;
  border-radius: 20px;
  border: 1px solid ${props => props.theme.color.white.darker};
  background-color: rgba(255, 255, 255, 0.4);
  transition: all 0.2s ease-in;
  :focus {
    outline: none;
    border: 1px solid ${props => props.theme.color.main};
  }
`;

const WarningMsg = styled.p`
  font-size: ${props => props.theme.font.size.sm};
  padding: 7px;
  color: ${props => props.theme.color.white.lighter};
  border-radius: 30px;
  background-color: rgba(34, 34, 34, 0.4);
`;

function Signup() {
  const {
    watch,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const password = useRef();
  password.current = watch("password");
  const navigate = useNavigate();
  const onSubmitValid = data => {
    if (data) {
      navigate(-1);
    }
  }

  return (
    <Wrapper>
      <FormCover>
        <h3>Sign Up</h3>
        <Form onSubmit={handleSubmit(onSubmitValid)}>
          <Title>ID</Title>
          <Input
            type="teemailxt"
            placeholder="??????, ????????? ????????? 6~12?????? ??????????????????."
            {...register("ID", {
              required: true,
              validate: {
                minLength: value => value.length >= 6,
                maxLength: value => value.length <= 12,
              }
            })}
          />
          <Title>Email</Title>
          <Input
            type="text"
            placeholder="???????????? ??????????????????."
            {...register("email", {
              required: true,
              pattern: /^([0-9a-zA-Z_\.-]+)@([0-9a-zA-Z_-]+)(\.[0-9a-zA-Z_-]+){1,2}$/,
            })}
          />
          <Title>Password</Title>
          <Input
            type="text"
            placeholder="?????? 8??? ????????? ??????????????? ??????????????????."
            {...register("password", {
              required: true,
              validate: {
                minLength: value => value.length >= 8,
              }
            })}
          />
          <Title>Password Check</Title>
          <Input
            type="text"
            placeholder="?????? 8??? ????????? ??????????????? ??????????????????."
            {...register("passwordCheck", {
              required: true,
              validate: {
                passwordCheck: (value) => value === password.current,
              }
            })}
          />
          {errors.ID && errors.ID.type === "minLength" && (<WarningMsg>???????????? 6??? ?????? ??????????????????.</WarningMsg>)}
          {errors.ID && errors.ID.type === "maxLength" && (<WarningMsg>???????????? 12??? ????????? ??????????????????.</WarningMsg>)}
          {errors.email && errors.email.type === "required" && <WarningMsg>????????? ????????? ?????? ?????????.</WarningMsg>}
          {errors.password && errors.password.type === "minLength" && <WarningMsg>??????????????? 8??? ?????? ??????????????????.</WarningMsg>}
          {errors.passwordCheck && errors.passwordCheck.type === "passwordCheck" && (<WarningMsg>??????????????? ???????????? ????????????.</WarningMsg>)}
          <button>Submit</button>
        </Form>
      </FormCover>
    </Wrapper>
  );
}

export default Signup;