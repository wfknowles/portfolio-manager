const { AuthenticationError } = require('apollo-server-express');
const { User, Project, Options, MessageTemplate } = require('../models');
const { signToken, isLoggedIn } = require('../utils/auth');

const resolvers = {
  Query: {
    user: async (parent, args, context) => {
      if (isLoggedIn(context)) {
        return await User.findById(context.user._id);
      }
    },
    users: async (parent, args, context) => {
      if (isLoggedIn(context)) {
        return await User.find({});
      }
    },
    options: async (parent, args, context) => {
      if (isLoggedIn(context)) {
        return await Options.findOne({'user': context.user._id});
      }
    },
    messageTemplate: async (parent, args, context) => {
      if (isLoggedIn(context)) {
        return await MessageTemplate.findOne({'user': context.user._id});
      }
    },
    messageTemplates: async (parent, args, context) => {
      return await MessageTemplate.find({});
    }
  },
  Mutation: {
    login: async (parent, args, context) => {
      const { email } = args;
      console.log({ args });
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
    addProject: async (parent, { project }, context) => {
      if (isLoggedIn(context)) {
        const { _id, ...proj } = project;
        return await Project.create(proj);
      }
    },
    addMessageTemplate: async (parent, { messageTemplate }, context) => {
      if (isLoggedIn(context)) {
        messageTemplate.user = context.user._id; // assign current user to messageTemplate
        const { _id, ...messTemp } = messageTemplate;
        const mt = await MessageTemplate.create(messTemp);
        console.log({messTemp, mt});
        return mt
      }
    },
    addOptions: async (parent, { options }, context) => {
      if (isLoggedIn(context)) {
        return await Options.create(options);
      }
    },
    updateProject: async (parent, { project }, context) => {
      if (isLoggedIn(context)) {
        const { _id, ...proj } = project;
        return await Project.findByIdAndUpdate(_id, proj, { new: true });
      }
    },
    updateMessageTemplate: async (parent, { messageTemplate }, context) => {
      if (isLoggedIn(context)) {
        const { _id, ...template} = messageTemplate;
        return await MessageTemplate.findByIdAndUpdate(_id, { ...template }, { new: true });
      }
    },
    updateOptions: async (parent, { options }, context) => {
      if (isLoggedIn(context)) {
        const { _id, ...opts} = options;
        return await Options.findByIdAndUpdate(_id, { ...opts }, { new: true });
      }
    }
  }
};

module.exports = resolvers;