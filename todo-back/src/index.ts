import express from "express";
import cors from "cors";
import { connectDB } from "./config/db";
import { ApolloServer } from "apollo-server";
import dotenv from "dotenv";
import typeDefs from "./graphql/schema";
import resolvers from "./graphql/resolvers";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 4020;

// Middleware
app.use(cors());
app.use(express.json());

async function startServer() {
  await connectDB(); // Connect to MySQL

  const server = new ApolloServer({ typeDefs, resolvers });
  await server.start();
  app.use("/graphql", expressMiddleware(server));

  app.listen(PORT, () => {
    console.log(`🚀 Server running at http://localhost:${PORT}/api/graphql`);
  });
}

startServer().catch((err) => console.error(err));
function expressMiddleware(
  server: ApolloServer
): import("express-serve-static-core").RequestHandler<
  {},
  any,
  any,
  import("qs").ParsedQs,
  Record<string, any>
> {
  throw new Error("Function not implemented.");
}
