import { gql } from '@apollo/client';

export const LOGIN = gql`
    mutation ($email: String!, $password: String!) {
        login (email: $email, password: $password) {
            token
            user {
                _id
                email
                firstName
                lastName
                displayName
            }
        }
    }
`

export const REGISTER = gql`
    mutation ($email: String!, $firstName: String!, $lastName: String!, $password: String!) {
        register (email: $email, firstName: $firstName, lastName: $lastName, password: $password) {
            token
            user {
                _id
                email
                firstName
                lastName
                displayName
            }
        }
    }
`

export const ADD_PROJECT = gql`
mutation ($project: ProjectInput) {
  addProject (project: $project) {
    _id
    user
    status
    title
    imageUrl
    description
    link
    github
    tech
  }
}
`

export const UPDATE_PROJECT = gql`
mutation ($project: ProjectInput) {
  updateProject(project: $project) {
    _id
    user
    status
    title
    imageUrl
    description
    link
    github
    tech
  }
}
`



export const ADD_OPTIONS = gql`
mutation ($options: OptionsInput) {
  addOptions (options: $options){
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

export const UPDATE_OPTIONS = gql`
mutation ($options: OptionsInput) {
  updateOptions (options: $options){
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



