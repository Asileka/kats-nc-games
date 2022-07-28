import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route, useParams } from "react-router-dom";
//import { useState } from "react";
import Header from "./components/Header";
import Navigation from "./components/Navigation";
import GamesList from "./components/Gameslist";
import Review from "./components/Review";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Navigation />
        <Routes>
          <Route path="/games" element={<GamesList />} />
          <Route path="/games/:category" element={<GamesList />} />
          <Route path="/reviews/:review_id" element={<Review />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
