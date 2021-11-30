# Notes

## Setup Project Architecture
* Initialize repo and create app directories
    * In project root directory, run ```npm init```
        * Update package.json
            * main: ```server/server.js```
            * scripts: 
            ```
            "start": "node server/server.js",
            "develop": "concurrently \"cd server && npm run watch\" \"cd client && npm start\"",
            "install": "cd server && npm i && cd ../client && npm i",
            "seed": "cd server && npm run seed",
            "build": "cd client && npm run build"
            ```
        * run: ```npm install concurrently --save-dev```
    * Create directory 'server' and run ```npm init```
        * Edit package.json
            * scripts: 
            ```
            "start": "node server.js",
            "watch": "nodemon",
            "seed": "node config/seeds.js"
            ```
        * run: ```npm install apollo-server-express bcrypt express graphql jsonwebtoken mongoose```
    * Create directory 'client' and run ```npx create-react-app <app-name>```
* Create Server and Setup Mongoose
    * Create file 'server.js' and setup express server
    * Create directory 'config' and file 'connection.js' within it
* Write Models, Schemas, and Utilities
    * Create directories 'models', 'schemas', and 'utils'
    * Create 'index.js' and files for each Model within 'models'
    * Create 'index.js', 'resolvers.js', and 'typeDefs.js'
* Write Seeds and seed database
* Setup React, React-Router, and Apollo
    * Create directory 'pages' and inside it, create files for each page of the application
    * Create directory 'components' and inside it, create directories for necessary custom components
    * Create directory 'utils' and inside it, create 'auth.js', 'actions.js', 'mutations.js', 'queries.js', and 'reducers.js'
    * Create directory '\__tests\__', create test files for validating components and reducers

## Setup Server
* Write 'server.js'
    * require express, apollo-server-express, and path
        ```
        const express = require('express');
        const { ApolloServer } = require('apollo-server-express');
        const path = require('path');
        ```
    * require '/schemas'
        ```
        const { typeDefs, resolvers } = require('./schemas');
        ```
    * require '/utils/auth/'
        ```
        const { authMiddleware } = require('./utils/auth');
        ```
    * require '/config/connection
        ```
        const db = require('./config/connection');
        ```
    * Setup 'PORT' and 'app' constants
        ```
        const PORT = process.env.PORT || 3001;
        const app = express();
        ```
    * Setup 'ApolloServer' and apply middleware
        ```
        const server = new ApolloServer({
            typeDefs,
            resolvers,
            context: authMiddleware
        });

        server.applyMiddleware({ app });
        ```
    * Setup url/json middleware
        ```
        app.use(express.urlencoded({ extended: false }));
        app.use(express.json());
        ```
    * Setup static asset middleware
        ```
        app.use('/images', express.static(path.join(__dirname, '../client/images')));
        ```
    * Setup production build middleware
        ```
        if (process.env.NODE_ENV === 'production') {
            app.use(express.static(path.join(__dirname, '../client/build')));
        }
        ```
    * Setup catch all route to redirect 404s to index.html
        ```
        app.get('*', (req, res) => {
            res.sendFile(path.join(__dirname, '../client/build/index.html'));
        });
        ```
    * Open db and set app to listen for activity
        ```
        db.once('open', () => {
            app.listen(PORT, () => {
                console.log(`API server running on port ${PORT}!`);
                console.log(`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`);
            });
        });
        ```
* Write 'connection.js'
    * Require mongoose
        ```
        const mongoose = require('mongoose');
        ```
    * Setup mongoose connection
        ```
        mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/<app-name>', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
            useFindAndModify: false
        });
        ```
    * Export connection
        ```
        module.exports = mongoose.connection;
        ```

