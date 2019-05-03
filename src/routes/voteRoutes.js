const voteRoutes = (app) => (voteService) => {
  app.post('/api/vote/:restaurantId/',(req, res) => {
    let result = voteService.saveVote(0, req.params.restaurantId);

    res.send(result);
  });
};

export default voteRoutes;