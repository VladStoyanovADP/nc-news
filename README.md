# Northcoders News API

## Project Overview

This project is a demonstration of a RESTful API written in JavaScript and using Express JS alongside PostgreSQL as a database management system.

A user is able to interact with news data with the following methods:

* GET a list of all of the available endpoints

* GET a list of articles with the ability to filter by topic, sort by various valid fields, decide upon the sort order and customise the pagination limits
* GET a specific article
* GET the comments of a specific article
* POST a new comment to a specific article
* PATCH a specific article in order to vote on it
* POST a new article
* DELETE a specific article

* DELETE a specific comment
* PATCH a specific comment in order to vote on it

* GET a list of topics
* POST a topic

* GET a list of users
* GET a specific user

This will be used as the backend for an upcoming front-end application built with ReactJS.

## Hosted Version

You can see a live version of this app, hosted with `React`:

https://nc-news-api-fpd6.onrender.com/api

## Setup Instructions

### Installation Requirements

-   **Node.js**: 19.0.0 or later
-   **PostgreSQL**: 12.12 or later

### Cloning the repository:

Create a directory to clone the repository to. In your terminal:

```
$ mkdir <new directory name>
```

Change directory to the one you just created:

```
$ cd <new directory name>
```

Then clone the repository:

```
$ git clone https://github.com/VladStoyanovADP/nc-news
```

### Install Dependencies

To install all the required dependencies, run this command in your terminal:

```
$ npm install
```

### Setup Dev & Test Environments

You will need to create two .env files to determine when we are using the development or test databases. You can use the following commands:

```
$ echo 'PGDATABASE=nc_news' >> .env.development
$ echo 'PGDATABASE=nc_news_test' >> .env.test
```

### Database setup and seeding

Run the following scripts in the root directory to setup both your development and test databases

Setup:

```
$ npm run setup-dbs
```

Seeding:

```
$ npm run seed
```

## Testing

To test this application, the `jest` framework is used. The tests can be run with the following script:

```
$ npm test
```

## Dependencies

These are all the dependencies required for this web app.

### Application Dependencies

| Dependency | Version         | Description                        | Docs                                                              |
| ---------- | --------------- | ---------------------------------- | ----------------------------------------------------------------- |
| npm        | 17.8.0 or later | Node.js / Node Package Manager     | https://docs.npmjs.com/downloading-and-installing-node-js-and-npm |
| dotenv     | 16.0.0 or later | Loads environment variables        | https://www.npmjs.com/package/dotenv                              |
| pg         | 8.7.3  or later | PostgreSQL client for Node.js      | https://www.npmjs.com/package/pg                                  |
| express    | 4.18.2 or later | Web application framework          | https://www.npmjs.com/package/express                             |
| cors       | 2.8.5  or later | Cross-Origin Resource Sharing      | https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS            |
| supertest  | 6.3.3  or later | Tests the requests                 | https://www.npmjs.com/package/supertest                           |

### Developer-only Dependencies

| Dependency    | Version          | Description                                        | Docs                                           |
| ------------- | ---------------- | -------------------------------------------------- | ---------------------------------------------- |
| jest          | 27.5.1 or later  | JavaScript testing framework                       | https://jestjs.io/docs/getting-started         |
| jest-sorted   | 1.0.14 or later  | Test sort and order of arrays & objects            | https://github.com/P-Copley/jest-sorted#readme |
| jest-extended | 1.0.14 or later  | add additional matchers to Jest's default ones     | https://www.npmjs.com/package/jest-extended    |
| pg-format     | 1.0.4  or later  | Formats PSQL queries to protect form SQL injection | https://www.npmjs.com/package/pg-format        |
| husky         | 8.0.2  or later  | Runs the test files before committing              | https://www.npmjs.com/package/husky            |

