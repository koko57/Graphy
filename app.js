require('dotenv').config();

const { GraphQLServer } = require('graphql-yoga');
const { prisma } = require('./generated/prisma-client');
const Mutation = require('./resolvers/mutation');
const Query = require('./resolvers/query');

const resolvers = {
    Query,
    Mutation
};

const server = new GraphQLServer({
    typeDefs: './schema.graphql',
    resolvers,
    context: { prisma }
});

server.start(() => console.log(`Server is running on http://localhost:4000`));
