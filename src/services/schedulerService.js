const schedulerService = {
	registerJobs: ({ schedule, restaurantService }) => {
		schedule.scheduleJob('59 23 * * *', () => {
			restaurantService.clearVotes();
		});
	
		schedule.scheduleJob('0 12 * * *', () => {
			restaurantService.chooseRestaurant();
		});
	
		schedule.scheduleJob('59 23 * * 0', () => {
			restaurantService.clearChosenRestaurants();
		});
	}
}

export default schedulerService;