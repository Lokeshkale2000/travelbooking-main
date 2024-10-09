const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const mongoose = require('mongoose');
const typeDefs = require('./schema/bookingSchema');
const resolvers = require('./resolvers/bookingResolvers');
require('dotenv').config();
const cors = require('cors');

const startServer = async () => {
  const app = express();
  app.use(cors());

  const server = new ApolloServer({ typeDefs, resolvers });
  await server.start();
  server.applyMiddleware({ app });

 
  mongoose.connect('mongodb+srv://lokeshkale2020:Kale@cluster1.swjox.mongodb.net/?retryWrites=true&w=majority&appName=Cluster1'
);

  app.listen({ port: 4000 }, () =>
    console.log(`Server ready at http://localhost:4000${server.graphqlPath}`)
  );
};

startServer();
