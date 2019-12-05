import { gql } from 'apollo-boost'

export const GET_CHARACTERS = gql`
    {
        characters{
            id
            firstName
            lastName
        }
    }
`

export const GET_DEVICES = gql`    
{
    devices{
        id
        year
        brand
        model
        price
    }
}
`

export const ADD_CHARACTER = gql`
  mutation AddContact($id: String!, $firstName: String!, $lastName: String!) {
    addContact(id: $id, firstName: $firstName, lastName: $lastName) {
      id
      firstName
      lastName
    }
  }
`
export const UPDATE_CHARACTER = gql`
  mutation UpdateContact($id: String!, $firstName: String!, $lastName: String!) {
    updateContact(id: $id, firstName: $firstName, lastName: $lastName) {
      id
      firstName
      lastName
    }
  }
`
export const REMOVE_CHARACTER = gql`
  mutation RemoveContact($id: String!) {
    removeContact(id: $id) {
      id
      firstName
      lastName
    }
  }
`
export const ADD_DEVICE = gql`
  mutation AddContact($id: String!, $year: String!, $brand: String!, $model: String!, $price: String!, $characterId: String! ) {
    addContact(id: $id, year: $year, brand: $brand, model: $model, price: $price , characterId:$characterId) {
      id
      year
      brand
      model
      price
      characterId
    }
  }
`
export const UPDATE_DEVICE = gql`
  mutation UpdateContact($id: String!, $year: String!, $brand: String!, $model: String!, $price: String!, $characterId: String!) {
    updateContact(id: $id, year: $year, brand: $brand, model: $model, price: $price , characterId:$characterId) {
        id
        year
        brand
        model
        price
        characterId
    }
  }
`
export const REMOVE_DEVICE = gql`
  mutation RemoveContact($id: String!) {
    removeContact(id: $id) {
        id
        year
        brand
        model
        price
        characterId
    }
  }
`