import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:3001/api'
})

export const getAllDrinks = () => api.get('/drinks');
export const sellDrink = name => api.put('/drinks/sell');
export const resetDrinks = () => api.put('/drinks/reset');
export const addMoney = name => api.put('/money/add');
export const resetMoney = () => api.put('/money/reset');

const apis = {
    getAllDrinks,
    sellDrink,
    resetDrinks,
    addMoney,
    resetMoney
}

export default apis;

