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
    getUserWithFoods: user => 
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
        axios.patch("/api/foods/", foodId, foodName, gramsCarbs, gramsFat, gramsProtein)
    
}