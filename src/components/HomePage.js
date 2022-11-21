import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

export default function HomePage(props) {
  const navigate = useNavigate();
  const [records, setRecords] = useState([]);
  const [name, setName] = useState("");
  const email = props.email;
  
  useEffect(() => {
    axios
      .get("http://localhost:5000/show-records", {
        headers: {
          email,
        },
      })
      .then((data) => {
        setRecords(data.data.filteredRecords);
        setName(data.data.user.name);
      })
      .catch((err) => console.log(err));
  }, [email]);

  function calcBalance() {
    let spentArr = 0;
    let entryArr = 0;

    records.forEach((value) => {
      if (value.type === "output") spentArr += parseFloat(value.value);
      else entryArr += parseFloat(value.value);
    });
    
    return(entryArr-spentArr);
  }

  calcBalance();

  return (
    <StyledContainer>
      <StyledTitleContainer>
        <StyledTitle>Olá, {name}!</StyledTitle>
        <ion-icon name="exit-outline" onClick={() => navigate("/")}></ion-icon>
      </StyledTitleContainer>

      <StyledRecordsContainer>
        {records.length > 0 ? (
          records.map((value, index) => {
            return (
              <StyledRecord key={index}>
                <StyledDate>{value.date}</StyledDate>
                <StyledDescription>{value.description}</StyledDescription>
                <StyledValue color={value.type}>
                  {parseFloat(value.value).toFixed(2)}
                </StyledValue>
              </StyledRecord>
            );
          })
        ) : (
          <StyledRecord>Não há registros de entrada ou saída</StyledRecord>
        )}

        <StyledBalanceContainer>
          <StyledBalance>SALDO</StyledBalance>
          <StyledBalanceValue>{calcBalance()}</StyledBalanceValue>
        </StyledBalanceContainer>
      </StyledRecordsContainer>

      <StyledButtonContainer>
        <StyledButton onClick={() => navigate("/new-entry")}>
          <ion-icon name="add-circle-outline"></ion-icon>
          <h1>Nova entrada</h1>
        </StyledButton>

        <StyledButton onClick={() => navigate("/new-spent")}>
          <ion-icon name="remove-circle-outline"></ion-icon>
          <h1>Nova saída</h1>
        </StyledButton>
      </StyledButtonContainer>
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
  color: white;
  font-size: 32px;
  font-weight: 700;
`;

const StyledTitleContainer = styled.div`
  width: 90%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 30px;
  font-weight: 700;
  color: white;
`;

const StyledRecordsContainer = styled.div`
  background-color: white;
  width: 90%;
  height: 70%;
  border-radius: 5px;
  margin: 10px 0;
  padding-top: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
`;

const StyledButton = styled.div`
  background-color: #a328d6;
  color: white;
  width: 40%;
  height: 100px;
  border-radius: 5px;
  border: none;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 5px 0 5px 5px;
  font-size: 25px;
  h1 {
    font-size: 20px;
    font-weight: 700;
  }
`;

const StyledButtonContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
`;

const StyledRecord = styled.div`
  width: 90%;
  display: flex;
  flex-direction: row;
  justify-content: start;
  position: relative;
  margin-bottom: 5px;
`;

const StyledDate = styled.h1`
  color: #c6c6c6;
`;

const StyledDescription = styled.h1`
  margin-left: 10px;
`;

const StyledValue = styled.h1`
  color: ${(props) => (props.color === "output" ? "red" : "green")};
  position: absolute;
  right: 0;
`;

const StyledBalanceContainer = styled.div`
  width: 90%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  position: absolute;
  bottom: 0;
  margin-bottom: 10px;
`;

const StyledBalance = styled.h1`
  font-size: 17px;
  font-weight: 700;
`;

const StyledBalanceValue = styled.h1`
  color: ${(props) => (props.color === "output" ? "red" : "green")};
`;
