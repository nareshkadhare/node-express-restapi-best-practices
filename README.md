# Nodejs - Express Framework - Rest Api Structure & Best Practices
Restful Api created using Nodejs Express framework with best practices & validation

## Installation
Clone repository

```bash
git clone https://github.com/nareshkadhare/node-express-restapi-best-practices.git
```

Run below command in root directory of project

```bash
$ npm install
```

## Mysql Database setup 
Create Database in your localhost

```bash
$ mysql >  CREATE testing DATABASE testing;
```

Create below table in `testing` database

```bash
$ mysql >  CREATE TABLE `student` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(45) NOT NULL,
  `dob` date NOT NULL,
  `gender` varchar(6) NOT NULL,
  `mobile` varchar(10) DEFAULT NULL,
  `email` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `email_UNIQUE` (`email`)
) 
```

## Run Application
Run below command in root directory of project

```bash
$ npm start
```

## OR

```bash
$ node app.js
```
