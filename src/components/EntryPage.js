import axios from "axios";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { AuthContext } from "../context/auth";

export default function EntryPage() {
  const navigate = useNavigate();
  const [value, setValue] = useState("");
  const [description, setDescription] = useState("");
  const {userEmail} = useContext(AuthContext);

  if(!userEmail) {
    navigate("/");
  }

  function createEntry() {
    const record = { value, description, email: userEmail, type: "input" };

    axios
      .post("http://localhost:5000/new-record", record)
      .then(navigate("/home"))
      .catch((err) => console.log(err));
  }

  return (
    <StyledContainer>
      <StyledTitle>Nova entrada</StyledTitle>
      <StyledInput
        placeholder="Valor"
        onChange={(value) => setValue(value.target.value)}
      ></StyledInput>
      <StyledInput
        placeholder="Descrição"
        onChange={(value) => setDescription(value.target.value)}
      ></StyledInput>
      <StyledButton onClick={() => createEntry()}>Salvar entrada</StyledButton>
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
  padding: 20px 0 0 20px;
`;

const StyledTitle = styled.h1`
  color: white;
  font-size: 32px;
  font-weight: 700;
  margin-bottom: 20px;
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
