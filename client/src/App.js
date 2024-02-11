import React from "react";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import NotesPage from "./Pages/NotesPage";
import LoginPage from "./Pages/LoginPage";
import SignupPage from "./Pages/SignupPage";
import { Route, Routes } from "react-router-dom";
import {Toaster} from 'react-hot-toast'

function App() {

  return (
    <div >
      <Header />
      <Toaster position="bottom-right" toastOptions={{duration : 2000}} />
      <Routes>
        <Route path='/' element={<LoginPage/>} />
        <Route path='/notes' element={<NotesPage/>} />
        <Route path='/signup' element={<SignupPage/>} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
