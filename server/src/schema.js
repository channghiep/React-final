import { gql } from 'apollo-server'
import { findBreakingChanges } from 'graphql'

const _ = require('lodash')

const characters = [
  {
    id: '1',
    firstName: 'Mickey',
    lastName: 'Mouse'
  },
  {
    id: '2',
    firstName: 'Donald',
    lastName: 'Duck'
  },
  {
    id: '3',
    firstName: 'Peter',
    lastName: 'Pan'
  }
]

const devices = [
  {
    id: '1',
    year: '2019',
    brand: 'Apple',
    model: 'Macbook Pro',
    price: '4000',
    characterId: '1'
  },
  {
    id: '2',
    year: '2018',
    brand: 'Apple',
    model: 'iPhone XS Max',
    price: '1300',
    characterId: '1'
  },
  {
    id: '3',
    year: '2017',
    brand: 'Apple',
    model: 'iPad Air 2',
    price: '400',
    characterId: '1'
  },
  {
    id: '4',
    year: '2019',
    brand: 'Samsung',
    model: 'Notebook 9',
    price: '1300',
    characterId: '2'
  },
  {
    id: '5',
    year: '2018',
    brand: 'Samsung',
    model: 'Galaxy Tab S',
    price: '700',
    characterId: '2'
  },
  {
    id: '6',
    year: '2017',
    brand: 'Samsung',
    model: 'Galaxy S8',
    price: '1500',
    characterId: '2'
  },
  {
    id: '7',
    year: '2019',
    brand: 'Microsoft',
    model: 'Surface Laptop 3',
    price: '1400',
    characterId: '3'
  },
  {
    id: '8',
    year: '2018',
    brand: 'Microsoft',
    model: 'Surface Pro X',
    price: '2000',
    characterId: '3'
  },
  {
    id: '9',
    year: '2017',
    brand: 'ASUS',
    model: 'ROG',
    price: '1200',
    characterId: '3'
  }
]

const typeDefs = gql`
  type Character {
    id: String!
    firstName: String
    lastName: String
  }

  type Device {
    id: String!
    year: String
    brand: String
    model: String
    price: String
    characterId: String
  }

  type Query {
    character(id: String!): Character,
    characters: [Character],
    device(id: String!): Device,
    devices: [Device]
  }

  type Mutation {
    addCharacter(id: String!, firstName: String!, lastName: String!): Character
    updateCharacter(id: String!, firstName: String!, lastName: String!): Character
    removeCharacter(id: String!): Character
    addDevice(id: String!, price: String!, model: String!, brand: String!, year: String!): Device
    updateDevice(id: String!, price: String!, model: String!, brand: String!, year: String!): Device
    removeDevice(id: String!): Device
  }
`

const resolvers = {
  Query: {
    characters: () => characters,
    character(parent, args) {
      return _.find(characters, {id: args.id})
    },
    devices: () => devices,
    // device(parent, args) {
    //   return _.filter(devices, {characterId: args.characterId})
    // }
    device(parent, args) {
      return _.find(characters, {id: args.id})
    }
  },
  Mutation: {
    addCharacter: (root, args) => {
      const newCharacter = {
        id: args.id,
        firstName: args.firstName,
        lastName: args.lastName
      }
      characters.push(newCharacter)
      return newCharacter
    },
    updateCharacter: (root, args) => {
      const character = find(characters, { id: args.id })
      if (!character) {
        throw new Error(`Couldn't find contact with id ${args.id}`)
      }
      character.firstName = args.firstName
      character.lastName = args.lastName
      return character
    },
    removeCharacter: (root, args) => {
      const removedCharacter = find(characters, { id: args.id })
      if (!removedCharacter) {
        throw new Error(`Couldn't find contact with id ${args.id}`)
      }
      remove(characters, c => { return c.id === removedCharacter.id })
      return removedCharacter
    },
    addDevice: (root, args) => {
      const newDevice = {
        id: args.id,
        price: args.price,
        model: args.model,
        brand: args.brand,
        year: args.year,
        character: args.character
      }
      devices.push(newDevice)
      return newDevice
    },
    updateDevice: (root, args) => {
      const device = find(devices, { id: args.id })
      if (!device) {
        throw new Error(`Couldn't find contact with id ${args.id}`)
      }
      device.year = args.year
      device.brand = args.brand
      device.model = args.model
      device.price = args.price
      device.character=args.character
      return device
    },
    removeDevice: (root, args) => {
      const removedDevice = find(devices, { id: args.id })
      if (!removedDevice) {
        throw new Error(`Couldn't find contact with id ${args.id}`)
      }
      remove(devices, c => { return c.id === removedDevice.id })
      return removedDevice
    }
  }
}

export { typeDefs, resolvers }