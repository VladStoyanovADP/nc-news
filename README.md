## Setup to be done before running the project locally:

* Create .env.development file and write this info to it: "PGDATABASE=nc_news"

* Create .env.test file and write this info to it: "PGDATABASE=nc_news_test"

* Run 'sudo service postgresql start' to start your psql server

* Run 'npm run setup-dbs' to setup the databases

* Run 'npm install' to install all required dependencies