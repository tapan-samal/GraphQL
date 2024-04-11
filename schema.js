const { query } = require("express");
const graphql = require("graphql");
const {
  GraphQLObjectType,
  GraphQLSchema,
  GraphQLInt,
  GraphQLString,
  GraphQLList,
} = graphql;

const UserType = new GraphQLObjectType({
  name: "user",
  fields: () => ({
    id: { type: GraphQLInt },
    name: { type: GraphQLString },
    email: { type: GraphQLString },
    phone: { type: GraphQLString },
  }),
});

const RootQuery = new GraphQLObjectType({
  name: "Tapan",
  fields: {
    codeimprove: {
      type: new GraphQLList(UserType),
      resolve(parent, args) {
        let data = [
          {id: 11, name: "codeMaster", email: "code@gamil.com", phone: 9898989898},
          {id: 12, name: "codeLearner", email: "learner@gamil.com", phone: 9898981100}
        ];
        return data;
      },
    },
  },
});

module.exports = new GraphQLSchema({ query: RootQuery });
