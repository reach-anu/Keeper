import React from "react";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import HomePage from "./Pages/HomePage";
import LoginPage from "./Pages/LoginPage";
import SignupPage from "./Pages/SignupPage";
import { Route, Routes } from "react-router-dom";

function App() {

  return (
    <div >
      <Header />
      <Routes>
        <Route path='/' element={<LoginPage/>} />
        <Route path='/homepage' element={<HomePage/>} />
        <Route path='/signup' element={<SignupPage/>} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
