const { AuthenticationError } = require('apollo-server-express');
require('dotenv').config();
const jwt = require('jsonwebtoken');
const secret = process.env.TOKEN_SECRET;
const expiration = process.env.TOKEN_EXP;

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

const signToken = ({ _id, firstName, lastName, email }) => {
    const payload = { _id, firstName, lastName, email };
    return jwt.sign({ data: payload }, secret, { expiresIn: expiration });
}

const isLoggedIn = (context) => {
  if (context.user) {
    return true;
  } else {
    throw new AuthenticationError('You must be logged in to perform this action...');
  }
}

module.exports = {
  authMiddleware,
  signToken,
  isLoggedIn
};