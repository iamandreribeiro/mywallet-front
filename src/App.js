import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import GlobalStyle from "./assets/css/globalStyles";
import SignIn from "./components/SignIn";

export default function App() {
  const [user, setUser] = useState("");

  return (
    <BrowserRouter>
      <GlobalStyle />
      <Routes>
        <Route path={"/"} element={<SignIn user={user} setUser={setUser} />} />
      </Routes>
    </BrowserRouter>
  );
}
