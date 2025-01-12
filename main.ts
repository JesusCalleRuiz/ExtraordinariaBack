import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { Query } from "./resolvers/query.ts";
import { Character } from "./resolvers/Character.ts";
import { typeDefs } from "./gql/schema.ts";
import { Episode } from "./resolvers/Episode.ts";
import { Location } from "./resolvers/Location.ts";


const server = new ApolloServer({
  typeDefs,
  resolvers: {
    Query,
    Character,
    Episode,
    Location,
  },
});

const { url } = await startStandaloneServer(server, { listen: 8000 });
console.info(`🚀 Server ready at ${url}`);