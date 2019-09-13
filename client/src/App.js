import React from 'react';
import "./reset.css"
import './App.css';
import Header from "./components/Header";
import MealContainer from "./components/MealContainer";
import API from "./components/utils/API";

class App extends React.Component {
  state = {
    breakfast: null,
    lunch: null,
    dinner: null
  }
  
  render() {
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
}
export default App;
