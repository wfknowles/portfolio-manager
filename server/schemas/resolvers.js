const { AuthenticationError } = require('apollo-server-express');
const { User, Project, Options } = require('../models');
const { signToken, isLoggedIn } = require('../utils/auth');

const resolvers = {
  Query: {
    user: async (parent, args, context) => {
      if (isLoggedIn(context)) {
        const user = await User.findById(context.user._id);
        return user;
      }
    },
    users: async (parent, args, context) => {
      if (isLoggedIn(context)) {
        const users = await User.find({});
        return users;
      }
    },
    options: async (parent, args, context) => {
      if (isLoggedIn(context)) {
        const { options } = Options.findOne({user: context.user._id});
        return options;
      }
    }
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
    },
    addProject: async (parent, args, context) => {
      if (isLoggedIn(context)) {
        const { _id, ...project } = args.project;
        return await Project.create(project);
      }
    },
    updateProject: async (parent, args, context) => {
      if (isLoggedIn(context)) {
        const { _id, ...project } = args.project;
        return await Project.findByIdAndUpdate(_id, project, { new: true });
      }
    },
    updateOptions: async (parent, args, context) => {
      if (isLoggedIn(context)) {
        const { _id, ...options } = args.options;
        // console.log({ ...options, user: context.user._id });
        return await Options.findByIdAndUpdate(_id, { ...options, user: context.user._id }, { new: true, upsert: true });
      }
    }
  }
};

module.exports = resolvers;