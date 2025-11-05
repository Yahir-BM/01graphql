import { ApolloServer } from "apollo-server";
import { typeDefs } from "./schemas/userSchema.js";
import { resolvers } from "./controllers/userController.js";

const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => {
  console.log(`🚀  Server GraphQL ready at ${url}`);
});