const { AuthenticationError } = require('apollo-server-express');
const { User } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {
    user: async (parent, args, context) => {
      if (context.user) {
        const user = await User.findById(context.user._id);
        return user;
      }

      throw new AuthenticationError('Not logged in');
    }
    // add additional graphQL queries here
  },
  Mutation: {
    login: async (parent, args, context) => {
      const { email } = args;
      const user = await User.findOne({ email });
      if(!user) {
        throw new AuthenticationError('No user associated with this email');
      }

      const correctPw = await user.isCorrectPassword(args.password);
      if (!correctPw) {
        throw new AuthenticationError('Incorrect password')
      }

      const token = signToken(user);
      return { token, user };
    },
    register: async (parent, args, context) => {
      const user = await User.create(args);
      const token = signToken(user);
      return { token, user };
    }
    // add additional graphQL mutations here
  }
};

module.exports = resolvers;