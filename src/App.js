import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { SignalIcon } from "@heroicons/react/24/outline";
import SignInPAge from "./pages/auth_page";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path="/sign-in" element={<SignInPAge />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
