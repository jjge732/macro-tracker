import React from 'react';
import "./reset.css"
import './App.css';
import Header from "./components/Header";
import MealContainer from "./components/MealContainer";

function App() {
  return (
    <>
    <Header/>
    <div id="container">
      <MealContainer/>
      <MealContainer/>
      <MealContainer/>
    </div>
    </>
  );
}

export default App;
