import axios from "axios";

export default {
    /**
     * This function makes a get request for a single user to the server
     * 
     * @param {string} user - A string representing the user's email
     * @returns {promise} - A promise representing the axios call
     */
    getUser: user => 
        axios.get(`/api/users/${user}`),
    
    /**
     * This function makes a get request for all users to our server
     * @returns {promise}- A promise representing the axios call
     */
    getAllUser: () =>
        axios.get("/api/user/all"),
    
    /**
     * This function makes a post request to create a new user in the database
     * @param {string} user - A string representing a user to be created
     * @returns {promise} - A promise representing the axios call
     */
    createNewUser: user => 
        axios.post("/api/users", user),
    
    /**
     * This function makes a delete request to delete a new user from the database
     * @param {string} user - A string representing the user to be deleted
     * @returns {promise} - A promise representing the axios call
     */
    deleteUser: user => 
        axios.delete("/api/users/", user),

    /**
     * This function makes a get request to the server to get one particular food by its id
     * @param {string} foodId - A string representing a particular food's id in the database
     * @returns {promise} - A promise representing the axios call
     */
    getFoodById: foodId => 
        axios.get(`/api/foods/${foodId}`),

    /**
     * This function makes a get request to the server to get all foods in the database
     * @returns {promise} - A promise representing the axios call
     */
    getAllFoods: () => 
        axios.get("/api/foods/all"),
    
    /**
     * This function makes a get request to the server to get all the foods associated with a user
     * @param {string} user - A string representing the user whose foods are being requested
     * @returns {promise} - A promise representing the axios call
     */
    getFoodsForUser: user => 
        axios.get(`/api/foods/user/${user}`),
    
    /**
     * This function makes a post request to the server to create a new food in the database
     * @param {string} foodName - A string representing the name of the food to be created
     * @param {int} gramsCarbs - An integer representing the grams of carbs in the food to be created
     * @param {int} gramsFat - An integer representing the grams of fat in the food to be created
     * @param {int} gramsProtein - An integer representing the grams of protein in the food to be created
     * @returns {promise} - A promise representing the axios call
     */
    createNewFood: (foodName, gramsCarbs, gramsFat, gramsProtein) => 
        axios.post("/api/foods/", foodName, gramsCarbs, gramsFat, gramsProtein),
    
    /**
     * This function makes a patch request to the server to update a new food in the database
     * @param {string} foodName - A string representing the name of the food to be created
     * @param {int} gramsCarbs - An integer representing the grams of carbs in the food to be created
     * @param {int} gramsFat - An integer representing the grams of fat in the food to be created
     * @param {int} gramsProtein - An integer representing the grams of protein in the food to be created
     * @returns {promise} - A promise representing the axios call
     */
    updateFood: (foodId, foodName, gramsCarbs, gramsFat, gramsProtein) =>
        axios.patch("/api/foods/", foodId, foodName, gramsCarbs, gramsFat, gramsProtein),

    /**
     * This function makes a get request to the server to get one particular meal by its id
     * @param {string} mealId - A string representing a particular meal's id in the database
     * @returns {promise} - A promise representing the axios call
     */
    getMealById: mealId => 
        axios.get(`/api/foods/${mealId}`),

    /**
     * This function makes a get request to the server to get all meals in the database
     * @returns {promise} - A promise representing the axios call
     */
    getAllMeals: () => 
        axios.get("/api/foods/all"),

    /**
     * This function makes a get request to the server to get all the meals associated with a user
     * @param {string} user - A string representing the user whose meals are being requested
     * @returns {promise} - A promise representing the axios call
     */
    getMealsForUser: user => 
        axios.get(`/api/foods/user/${user}`),

    /**
     * This function makes a post request to the server to create a new meal in the database
     * @param {string} mealName - A string representing the name of the meal to be created
     * @param {string} foodId - An integer representing the id of the food to be added to the meal
     * @returns {promise} - A promise representing the axios call
     */
    createNewMeal: (mealName, foodId) => 
        axios.post("/api/meals/", mealName, foodId),

    /**
     * This function makes a patch request to the server to add a new food to a meal in the database
     * @param {string} mealId - A string representing the id of the meal to which the food is being added
     * @param {string} foodId - An integer representing the id of the food to be added to the meal
     * @returns {promise} - A promise representing the axios call
     */
    addFoodToMeal: (mealId, foodId) => 
        axios.post("/api/meals/", mealId, foodId)
    
}