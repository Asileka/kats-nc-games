import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route, useParams } from "react-router-dom";
//import { useState } from "react";
import Header from "./components/Header";
import Navigation from "./components/Navigation";
import GamesList from "./components/Gameslist";
import CategoryGameList from "./components/CategoryGameList";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Navigation />
        <Routes>
          <Route path="/games" element={<GamesList />} />
          <Route path="/games/:category" element={<CategoryGameList />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
