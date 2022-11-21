import { BrowserRouter, Route, Routes } from "react-router-dom";
import GlobalStyle from "./assets/css/globalStyles";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import HomePage from "./components/HomePage";
import EntryPage from "./components/EntryPage";
import SpentPage from "./components/SpentPage";
import AuthProvider from "./context/auth";

export default function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <AuthProvider>
        <Routes>
          <Route path={""} element={<SignIn />} />
          <Route path={"sign-up"} element={<SignUp />} />
          <Route path={"home"} element={<HomePage />} />
          <Route path={"new-entry"} element={<EntryPage />} />
          <Route path={"new-spent"} element={<SpentPage />} />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}
