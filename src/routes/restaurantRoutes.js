const restauranteRoutes = (app) => (restaurantService) => {
  app.get('/api/restaurants/', (req, res) => {
    let result = restaurantService.getRestaurants();

    res.send(result);
  });

  app.get('/api/restaurants/chosen', (req, res) => {
    let result = restaurantService.getChosenRestaurants(req);

    res.send(result);
  });
};

export default restauranteRoutes;