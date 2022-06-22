import { ApolloServer } from "apollo-server-express";
import Schema from "./Schema";
import Resolvers from "./Resolvers";
import express from "express";
import { ApolloServerPluginDrainHttpServer } from "apollo-server-core";
import http from "http";
import mongoose from 'mongoose'

async function startApolloServer(schema: any, resolvers: any) {
  const app = express();
  const uri: string = "mongodb+srv://admin123:admin123@cluster0.yx6nh.gcp.mongodb.net/?retryWrites=true&w=majority" || ''
const main = async () => {
  await mongoose.connect(uri)
};
main()
  .then(() => console.log('🎉 connected to database successfully'))
  .catch(error => console.error(error));
  const httpServer = http.createServer(app);
  const server = new ApolloServer({
    typeDefs: schema,
    resolvers,
    //tell Express to attach GraphQL functionality to the server
    plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
  }) as any;
  await server.start(); //start the GraphQL server.
  server.applyMiddleware({ app });
  await new Promise<void>((resolve) =>
    httpServer.listen({ port: 4000 }, resolve) //run the server on port 4000
  );
  console.log(`Server ready at http://localhost:4000${server.graphqlPath}`);
}
//in the end, run the server and pass in our Schema and Resolver.
startApolloServer(Schema, Resolvers);