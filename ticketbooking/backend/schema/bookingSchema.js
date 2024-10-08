const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Booking {
    id: ID!
    title: String
    firstName: String
    lastName: String
    birthDate: String
  
    email: String
    phone: String
    departure: String
    destination: String
    departureDate: String
    departureTime: String
    classOfService: String
   
    preferredAirlines: String
   
  }

  type Query {
    bookings: [Booking]
  }

  type Mutation {
    addBooking(
      title: String!,
      firstName: String!,
      lastName: String!,
      birthDate: String,
    
      email: String!,
      phone: String!,
      departure: String!,
      destination: String!,
      departureDate: String!,
      departureTime: String!,
      classOfService: String!,
   
      preferredAirlines: String,
     
    ): Booking
  }
`;

module.exports = typeDefs;
