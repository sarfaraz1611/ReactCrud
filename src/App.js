import React from "react";
import Header from "./Components/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Alldata from "./Components/Alldata";
import Adduser from "./Components/Adduser";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/all" element={<Alldata />} />
        <Route path="/add" element={<Adduser />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
