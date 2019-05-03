# code-challenge
This is a DB Server and PragmaTeam pair-programming code challenge.

## What's this application?
This repository contains the backend part of a voting facilitator tool for lunch, developed in NodeJS. We will work together to make some improvements on it and, of course, have some fun as well.

## Good things to know about this App
- Made in NodeJS
- Exposes REST endpoints
- Has no database, just a fake restaurant array
- Has no authentication
- The tests are running over the `compiled` folder

## Known improvement opportunities
- Test coverage is not ideal
- Have more integration tests
- Do not compile into a folder to run the tests
- A lot of code design issues to fix
- Make it a little bit real using users and restaurants

## Existents endpoints

baseUrl: `http://localhost:3000`

[GET] `/api/restaurants/`

[GET] `/api/restaurants/chosen`

[GET] `/api/users/`

[POST] `/api/vote/{restaurantId}/`

## Suggested and available Commands

`nvm use` (or manually install nodejs version 10.15.3)

`npm install`

`npm run start`

`npm run start:watch`

`npm run test`
