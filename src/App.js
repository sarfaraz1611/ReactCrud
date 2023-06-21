import React from "react";
import Header from "./Components/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Alldata from "./Components/Alldata";
import Adduser from "./Components/Adduser";
import Login from "./Components/Login";
import Register from "./Components/Register";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/ReactCrud" element={<Login />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/all" element={<Alldata />} />

        <Route path="/add" element={<Adduser />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
