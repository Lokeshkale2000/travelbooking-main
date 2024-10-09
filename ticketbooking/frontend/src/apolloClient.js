import { ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  uri: 'https://travelbooking-main-2lq1.vercel.app/graphql', 
  cache: new InMemoryCache(),
});

export default client;
