import express from 'express';
import bodyParser from 'body-parser';
import schedule from 'node-schedule';

import {
  schedulerService,
  restaurantService,
  userService,
  voteService
} from './src/services';

import {
  restaurantRoutes,
  userRoutes,
  voteRoutes
} from './src/routes';

const app = express();

schedulerService.registerJobs({ schedule, restaurantService });

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET,POST");
  res.setHeader("Access-Control-Allow-Headers", "Access-Control-Allow-Origin, Authorization, Content-Type");
next();
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

restaurantRoutes(app)(restaurantService);
userRoutes(app)(userService);
voteRoutes(app)(voteService);

module.exports = app;
