import { gql } from '@apollo/client';

export const LOGIN = gql`
    mutation($email: String!, $password: String!) {
        login(email: $email, password: $password) {
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
    mutation($email: String!, $firstName: String!, $lastName: String!, $password: String!) {
        register(email: $email, firstName: $firstName, lastName: $lastName, password: $password) {
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