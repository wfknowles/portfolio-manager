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
    user: ID!
    title: String!
    brandImageUrl: String!
    featureImageUrl: String!
    bio: String!
    skills: JSONObject!
  }

  type Query {
    user: User
    users: [User]
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    register(firstName: String!, lastName: String!, email: String!, password: String!): Auth
    addProject(project: ProjectInput): Project
    updateProject(project: ProjectInput): Project
    addOptions(options: OptionsInput): Options
    updateOptions(options: OptionsInput): Options
  }
`;

module.exports = typeDefs;