import { BrowserRouter, Route, Routes } from "react-router-dom";
import GlobalStyle from "./assets/css/globalStyles";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import HomePage from "./components/HomePage";
import EntryPage from "./components/EntryPage";
import SpentPage from "./components/SpentPage"
import { useState } from "react";

export default function App() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");

  return (
    <BrowserRouter>
      <GlobalStyle />
      <Routes>
        <Route path={""} element={<SignIn setEmail={setEmail} setName={setName}/>} />
        <Route path={"sign-up"} element={<SignUp />} />
        <Route path={"home"} element={<HomePage email={email} name={name}/>} />
        <Route path={"new-entry"} element={<EntryPage email={email} />} />
        <Route path={"new-spent"} element={<SpentPage email={email} />} />
      </Routes>
    </BrowserRouter>
  );
}
