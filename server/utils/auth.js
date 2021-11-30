require('dotenv').config();
const jwt = require('jsonwebtoken');

const secret = process.env.TOKEN_SECRET;
const expiration = '3h';

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

const signToken = ({ _id, phoneNumber, firstName, lastName, role }) => {
    const payload = { _id, phoneNumber, firstName, lastName, role };
    return jwt.sign({ data: payload }, secret, { expiresIn: expiration });
}

module.exports = {
  authMiddleware,
  signToken
};