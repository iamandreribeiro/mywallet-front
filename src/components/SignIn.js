import axios from "axios";
import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { AuthContext } from "../context/auth";

export default function SignIn() {
  const {setUserEmail} = useContext(AuthContext);

  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function createUser() {
    const user = { email, password };

    axios
      .post("http://localhost:5000/sign-in", user)
      .then(() => {
        navigate("/home");
        setUserEmail(user.email);
      })
      .catch((err) => {
        alert("Usuário não encontrado! Verifique seus dados.");
        console.log(err);
      });
  }

  return (
    <StyledContainer>
      <StyledTitle>MyWallet</StyledTitle>

      <StyledInput
        placeholder="E-mail"
        onChange={(email) => setEmail(email.target.value)}
      ></StyledInput>

      <StyledInput
        placeholder="Senha"
        type="password"
        onChange={(password) => setPassword(password.target.value)}
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
