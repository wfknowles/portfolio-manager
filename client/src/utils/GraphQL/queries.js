import { gql } from '@apollo/client';

export const QUERY_USER = gql`
  query($email: String!) {
    user(email: $email) {
      _id
      email
      firstName
      lastName
    }
  }
`

export const QUERY_OPTIONS = gql`
  query {
    options {
      _id
      user
      title
      brandImageUrl
      featureImageUrl
      bio
      skills
    }
  }
`

export const QUERY_MESSAGE_TEMPLATE = gql`
  query {
    messageTemplate {
      _id
      user
      templateID
      serviceID
      userID
      accessToken
    }
  }
`

export const QUERY_MESSAGE_TEMPLATES = gql`
  query {
    messageTemplates {
      _id
      user
      templateID
      serviceID
      userID
      accessToken
    }
  }
`