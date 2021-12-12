const { gql } = require('apollo-server-express');
const GraphQLJSON = require('graphql-type-json');

const typeDefs = gql`
  scalar JSON
  scalar JSONObject

  type User {
    _id: ID
    firstName: String
    lastName: String
    email: String
    displayName: String
  }

  type Auth {
    token: ID
    user: User
  }

  type Project {
    _id: ID
    user: ID
    status: String
    title: String
    imageUrl: String
    description: String
    link: String
    github: String
    tech: JSONObject
  }

  input ProjectInput {
    _id: ID
    user: ID!
    status: String!
    title: String!
    imageUrl: String!
    description: String!
    link: String!
    github: String!
    tech: JSONObject!
  }

  type Options {
    _id: ID
    user: ID
    title: String
    brandImageUrl: String
    featureImageUrl: String
    bio: String
    skills: JSONObject
  }

  input OptionsInput {
    _id: ID
    title: String
    brandImageUrl: String
    featureImageUrl: String
    bio: String
    skills: JSONObject
  }

  type MessageTemplate {
    _id: ID
    user: ID
    templateID: String
    serviceID: String
    userID: String
    accessToken: String
  }

  input AddMessageTemplateInput {
    templateID: String!
    serviceID: String!
    userID: String!
    accessToken: String!
  }

  input UpdateMessageTemplateInput {
    _id: ID!
    user: ID!
    templateID: String!
    serviceID: String!
    userID: String!
    accessToken: String!
  }

  type Query {
    user: User
    users: [User]
    options: Options
    messageTemplate: MessageTemplate
    messageTemplates: [MessageTemplate]
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    register(firstName: String!, lastName: String!, email: String!, password: String!): Auth
    addProject(project: ProjectInput): Project
    addMessageTemplate(messageTemplate: AddMessageTemplateInput): MessageTemplate
    addOptions(options: OptionsInput): Options
    updateProject(project: ProjectInput): Project
    updateMessageTemplate(messageTemplate: UpdateMessageTemplateInput): MessageTemplate
    updateOptions(options: OptionsInput): Options
  }
`;

module.exports = typeDefs;