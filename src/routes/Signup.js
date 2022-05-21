import { useNavigate } from 'react-router-dom';
import { useForm } from "react-hook-form";
import styled from "styled-components";
import { useRef } from 'react';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-image: linear-gradient(180deg, rgba(255,255,255,0.4) 0%, rgba(255,255,255,0.4) 100%), url("../images/login_bg.jpg");
  background-size: cover;
`;

const FormCover = styled.div`
  margin-top: 100px;
  h3 {
    margin-bottom: 50px;
    font-size: 40px;
    font-weight: 700;
    text-align: center;
  }
`;

const Form = styled.form`
  text-align: center;
  button {
    all: unset;
    display: block;
    margin: 30px auto 0;
    padding: 12px 30px;
    cursor: pointer;
    color: ${props => props.theme.white.lighter};
    border: 1px solid ${props => props.theme.white.lighter};
    border-radius: 10px;
    transition: all 0.2s ease-in;
    &:hover {
      color: ${props => props.theme.white.darker};
      border: 1px solid ${props => props.theme.main};
      background-color: ${props => props.theme.main};
      border-radius: 30px;
    }
  }
`;

const Title = styled.h4`
  font-size: 18px;
  font-weight: 700;
`;

const Input = styled.input`
  display: inline-block;
  width: 300px;
  margin: 15px 0 20px;
  padding: 7px;
  text-align: center;
  border-radius: 20px;
  border: 1px solid ${props => props.theme.white.darker};
  background-color: rgba(255, 255, 255, 0.4);
  transition: all 0.2s ease-in;
  :focus {
    outline: none;
    border: 1px solid ${props => props.theme.main};
  }
`;

const WarningMsg = styled.p`
  font-size: 14px;
  padding: 7px;
  color: ${props => props.theme.white.lighter};
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
            placeholder="영문, 숫자를 사용해 6~12자를 입력해주세요."
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
            placeholder="이메일을 입력해주세요."
            {...register("email", {
              required: true,
              pattern: /^([0-9a-zA-Z_\.-]+)@([0-9a-zA-Z_-]+)(\.[0-9a-zA-Z_-]+){1,2}$/,
            })}
          />
          <Title>Password</Title>
          <Input
            type="text"
            placeholder="최소 8자 이상의 비밀번호를 입력해주세요."
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
            placeholder="최소 8자 이상의 비밀번호를 입력해주세요."
            {...register("passwordCheck", {
              required: true,
              validate: {
                passwordCheck: (value) => value === password.current,
              }
            })}
          />
          {errors.ID && errors.ID.type === "minLength" && (<WarningMsg>아이디는 6자 이상 입력해주세요.</WarningMsg>)}
          {errors.ID && errors.ID.type === "maxLength" && (<WarningMsg>아이디는 12자 이하로 입력해주세요.</WarningMsg>)}
          {errors.email && errors.email.type === "required" && <WarningMsg>이메일 입력은 필수 입니다.</WarningMsg>}
          {errors.password && errors.password.type === "minLength" && <WarningMsg>비밀번호는 8자 이상 입력해주세요.</WarningMsg>}
          {errors.passwordCheck && errors.passwordCheck.type === "passwordCheck" && (<WarningMsg>비밀번호가 일치하지 않습니다.</WarningMsg>)}
          <button>Submit</button>
        </Form>
      </FormCover>
    </Wrapper>
  );
}

export default Signup;