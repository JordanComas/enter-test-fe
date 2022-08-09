import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Phones from "./components/Phones";
import PhoneDetails from "./components/PhoneDetails";

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Phones />} />
        <Route path="/phone/:id" element={<PhoneDetails />} />
      </Routes>
    </div>
  );
}

export default App;
