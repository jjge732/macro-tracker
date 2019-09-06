import React from 'react';
import './App.css';
import Header from "./components/Header";
import MealContainer from "./components/MealContainer";

function App() {
  return (
    <div id="container">
      <Header/>
      <MealContainer/>
    </div>
  );
}

export default App;
