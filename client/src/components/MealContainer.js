import React from 'react';
import FoodContainer from "./FoodContainer"
import axios from "axios";

function MealContainer() {
  return (
      <div className="mealContainer">
        <div className="mealTitle">
          Meal X
        </div>
        <FoodContainer/>
        <FoodContainer/>
        <FoodContainer/>
      </div>
  );
}

export default MealContainer;