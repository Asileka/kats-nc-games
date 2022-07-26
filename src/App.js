import logo from "./logo.svg";
import "./App.css";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Header from "./components/Header";
import Navigation from "./components/Navigation";
import GamesList from "./components/Gameslist";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Navigation />
        <Routes>
          <Route path="/games" element={<GamesList />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
