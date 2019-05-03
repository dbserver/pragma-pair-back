import moment from 'moment';

import restaurantIntegration from '../integration/restaurantIntegration';

import Restaurant from '../models/Restaurant';

import { DATEFORMAT } from '../constants/constants';

let restaurants = restaurantIntegration.getRestaurants({ Restaurant });

let restaurantsChosen = [];

const getRestaurants= () =>{
	return restaurants;
};

const addVote = (restaurantId) => {
	let restaurant = findRestaurant(restaurantId);

	restaurant.votes++;
};

const findRestaurant= (restaurantId) =>{
	return restaurants.find(restaurant => restaurant.id == restaurantId);
};

const chooseRestaurant = () => {
	let restaurantToChoose = findRestaurantMostVoted();

	restaurantToChoose = {
		...restaurantToChoose,
		dateChoosed: moment().format(DATEFORMAT)
	}

	restaurantsChosen.push(restaurantToChoose);
	removeChosenRestaurantFromRestaurants(restaurantToChoose);
};

const findRestaurantMostVoted = () => {
	return restaurants.reduce((prevRestaurant, currentRestaurant) => prevRestaurant.votes > currentRestaurant.votes ? prevRestaurant : currentRestaurant);
};

const removeChosenRestaurantFromRestaurants = (restaurantToRemove) => {
	let index = restaurants.findIndex(restaurant => restaurant.id == restaurantToRemove.id);

	restaurants.splice(index, 1);
};

const clearVotes = () => {
	restaurants.map((restaurant) => {
		restaurant.votes = 0;
		return restaurant;
	});
};

const getChosenRestaurants = () => {
	return restaurantsChosen;
};

const clearChosenRestaurants = () => {
	restaurantsChosen = [];
	restoreRestaurants();
};

const restoreRestaurants = () => {
	restaurants = restaurantIntegration.getRestaurants({ Restaurant });
};

export default {
	getRestaurants,
	addVote,
	findRestaurant,
	chooseRestaurant,
	clearVotes,
	clearChosenRestaurants,
	getChosenRestaurants
}