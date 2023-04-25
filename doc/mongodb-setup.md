# MongoDB Project Setup 

## Stack

- Babel 
- Express
- MongoDB 
- Node.js 
- Postman 

## MongoDB Nix Installation 

- MongoDB package to install:
  ```
  mongodb-4_2
  mongosh
  ```

- Tools packages:
  ```
  postman
  robo3t
  ```

- Nix Mongodb packages above versions 4.2 are currently broken.

- Add MongoDB service configuration:
  ```
  services.mongodb = { 
    enable = true;
    package = pkgs.mongodb-4_2;
  
    # Default configuration:
    # extraConfig         = "";
    # user                = "mongodb";
    # dbpath              = "/var/db/mongodb";
    # quiet               = false;
    # initialRootPassword = null;
    # enableAuth          = false;
    # bind_ip             = "127.0.0.1";
  ```

- Systemd commands to enable, start, stop `mongod` service:
  https://www.mongodb.com/docs/manual/tutorial/install-mongodb-on-debian/

## Mongoose Notes 

- Website: https://mongoosejs.com/docs/
- Install with NPM: `npm i mongoose`

## Basic Babel Setup 

- Install babel packages:
  `npm i --save-dev @babel/core @babel/cli @babel/node @babel/preset-env`

- Install nodemon and body-parser:
  `npm i nodemon body-parser`

- Babel configuration file `.babelrc`:
  ```
  {
    "presets": {
      "@babel/preset-env"
    }
  }
  ```

## TypeScript Types Installation 

Install type definitions for typescript IDE features:
`npm install --save-dev typescript @types/node @types/express`

## MongoDB Refresher

- Database with collections
- Collections have documents or objects
- Documents look like JSON objects 
- Inside each document, you have the data with key-value pairs or 
  array of items
- Nix package `robo3t` is a GUI for mongodb, formally called Robomongo

