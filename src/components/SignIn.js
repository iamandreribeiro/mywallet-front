import { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function getEmail(value) {
    setEmail(value);
  }

  function getPassword(value) {
    setPassword(value);
  }

  function createUser() {
    const user = { email, password };
    console.log(user);
  }

  return (
    <StyledContainer>
      <StyledTitle>MyWallet</StyledTitle>

      <StyledInput
        placeholder="E-mail"
        onChange={(email) => getEmail(email.target.value)}
      ></StyledInput>

      <StyledInput
        placeholder="Senha"
        type="password"
        onChange={(password) => getPassword(password.target.value)}
      ></StyledInput>

      <StyledButton onClick={() => createUser()}>Entrar</StyledButton>

      <Link to="/sign-up">
        <StyledSignUp>Primeira vez? Cadastre-se</StyledSignUp>
      </Link>
    </StyledContainer>
  );
}

const StyledContainer = styled.div`
  font-family: "Raleway";
  background-color: #8c11be;
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const StyledTitle = styled.h1`
  font-family: "Saira Stencil One";
  color: white;
  font-size: 32px;
  font-weight: 400;
`;

const StyledInput = styled.input`
  width: 90%;
  height: 58px;
  border-radius: 5px;
  border: none;
  margin-top: 15px;
  padding-left: 10px;
  ::placeholder {
    color: black;
    font-size: 20px;
    font-weight: 400;
  }
`;

const StyledButton = styled.button`
  background-color: #a328d6;
  color: white;
  width: 90%;
  height: 46px;
  border-radius: 5px;
  border: none;
  margin: 15px 0 30px 0;
  font-size: 20px;
  font-weight: 700;
`;

const StyledSignUp = styled.h1`
  color: white;
  font-size: 15px;
  font-weight: 700;
`;
