import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignInPAge from "./pages/auth_page";
import SignUpPage from "./components/signup_form";
import Dashboard_Page from "./pages/Dashboard_page";
import Courses from "./components/courses";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/sign-in" element={<SignInPAge />}></Route>
          <Route path="/sign-up" element={<SignUpPage />}></Route>
          <Route path="/dashboard" element={<Dashboard_Page />}></Route>
          <Route path="/courses" element={<Courses />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
