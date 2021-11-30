# MERN stack
How to create an application using MongoDB, Express.js, React.js, and Node.js

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
        * run: ```npm install apollo-server-express bcrypt express graphql jsonwebtoken mongoose dotenv```
        * run: ```npm install nodemon --save-dev```
    * Create directory 'client'
        * run ```npx create-react-app <app-name>```
        * run ```npm install react-bootstrap @apollo/client graphql jwt-decode react-router-dom```

* Create Server and Setup Mongoose
    * Create file 'server.js' and setup express server
    * Create directory 'config' and file 'connection.js' within it
* Write Models, Schemas, and Utilities
    * Create directories 'models', 'schemas', and 'utils'
    * Create 'index.js' and files for each Model within 'models'
    * Create 'index.js', 'resolvers.js', and 'typeDefs.js' within 'schemas'
* Write Seeds and seed database
* Setup React, React-Router, and Apollo
    * Create directory 'pages' and inside it, create files for each page of the application
    * Create directory 'components' and inside it, create directories for necessary custom components
    * Create directory 'utils' and inside it, create 'auth.js', 'actions.js', 'mutations.js', 'queries.js', and 'reducers.js'
    * Create directory '\_\_tests\_\_', create test files for validating components and reducers

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

## Setup JSON Web Tokens
* Create '.env' file in application root directory
    * Add variable 'TOKEN_SECRET'
        ```
        TOKEN_SECRET='jTjeyjjO0PxJOgm7cZLISZ3OCa5J3IJl'
        ```
* Write 'auth.js'
    * require jsonwebtoken and dotenv
        ```
        require('dotenv').config();
        const jwt = require('jsonwebtoken');
        ```
    * Setup 'secret' and 'expiration' constants
        ```
        const secret = process.env.TOKEN_SECRET;
        const expiration = '3h';
        ```
    * Create 'authMiddleware' function
        ```
        const authMiddleware = ({req}) => {
            let token = req.body.token || req.query.token || req.headers.authorization;

            if (req.headers.authorization) {
                token = token
                    .split(' ')
                    .pop()
                    .trim();
            }

            if (!token) {
                return req;
            }

            try {
                const { data } = jwt.verify(token, secret, { maxAge: expiration });
                req.user = data;
            } catch (e){
                console.log('authError', e);
            }

            return req;
        }
        ```
    * Create 'signToken' function
        ```
        const signToken = ({ _id, phoneNumber, firstName, lastName, role }) => {
            const payload = { _id, phoneNumber, firstName, lastName, role };
            return jwt.sign({ data: payload }, secret, { expiresIn: expiration });
        }
        ```
    * Export authMiddleware and signToken
        ```
        module.exports = {
            authMiddleware,
            signToken
        };
        ```

## Setup Data Models
* Write 'index.js'
    * Require models
        ```
        const ModelA = require('./ModelA');
        const ModelB = require('./ModelB');
        ```
    * Export models
        ```
        module.exports = { ModelA, ModelB };
        ```
* Write models
    * Require mongoose
        ```
        const mongoose = require('mongoose');
        ```
    * Destructure mongoose and access Schema object
        ```
        const { Schema } = mongoose;
        ```
    * Create schema
        ```
        const modelaSchema = new Schema({
            // see docs for how to format schemas: https://mongoosejs.com/docs/guide.html#schemas
        });
        ```
    * Create model
        ```
        const ModelA = mongoose.model('ModelA', orderSchema);
        ```
    * Export model
        ```
        module.exports = ModelA;
        ```

## Setup GraphQL Data Controllers
* Write 'index.js'
    * Require and export 'typeDefs' and 'resolvers'
        ```
        const typeDefs = require('./typeDefs');
        const resolvers = require('./resolvers');

        module.exports = { typeDefs, resolvers };
        ```
* Write 'typeDefs.js'
    * Require and destructure apollo-express-server
        ```
        const { gql } = require('apollo-server-express');
        ```
    * Setup 'typeDefs' constant
        ```
        const typeDefs = gql`
            // see docs for how to format typeDefs: https://www.apollographql.com/docs/apollo-server/getting-started/#step-3-define-your-graphql-schema
        `;
        ```
    * Export typeDefs
        ```
        module.exports = typeDefs;
        ```
* Write 'resolvers.js'
    * Require and destructure apollo-express-server
        ```
        const { AuthenticationError } = require('apollo-server-express');
        ```
    * Require and destructure models
        ```
        const { ModelA, ModelB } = require('../models');
        ```
    * Setup 'resolvers' constant
        ```
        const resolvers = {
            Query: {
                // see docs for how to format queries: https://www.apollographql.com/docs/tutorial/resolvers/
            },
            Mutation: {
                // see docs for hot to format mutations: https://www.apollographql.com/docs/tutorial/mutation-resolvers/
            }
        };
        ```
    * Export resolvers
        ```
        module.exports = resolvers;
        ```