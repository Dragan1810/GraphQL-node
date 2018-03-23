const express = require("express");
const graphqlHTTP = require("express-graphql");
const schema = require("./schema/schema");
const app = express();

app.use("/graphql", graphqlHTTP({ schema, graphiql: true }));

app.listen("3333", () => console.log("Started Server on Port 3333 !!!"));
