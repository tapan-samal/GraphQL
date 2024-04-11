const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const PORT = 4400;
const app = express();
const schema = require("./schema");

app.use(express.json());

app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: true,
  })
);

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
})