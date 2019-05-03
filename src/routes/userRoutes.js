const userRoutes = (app) => (userService) => {
  app.get('/api/users/', (req, res) => {
    let result = userService.getUser(0);

    res.send(result);
  });
};

export default userRoutes;
