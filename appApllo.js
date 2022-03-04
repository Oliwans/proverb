const { ApolloServer, gql } = require('apollo-server-koa');
const Koa = require('koa');
const model = require('./model.js');
let idiom = model.idiom;
console.log(idiom,222)
// idiom.findAll({
//   where: {
//     id: 1
//   },
//   raw: true,
// }).then(res => {
//   console.log(res)
// })
const app = new Koa();
let server;

const typeDefs = gql`
    type Query {
      proverbList(pageNum: Int,pageSize: Int): [proverb]
      singleProverb(word: String!): proverb
    }
    type proverb {
      id: ID
      derivation: String
      example: String
      explanation: String
      pinyin: String
      word: String
      abbreviation: String
    }
    type Mutation {
      createProverb(derivation: String,example: String,explanation: String,pinyin: String,word: String,abbreviation: String): proverb
    }
`;


async function startServer() {
    const resolvers = {
        Query: {
          proverbList: async (root, {pageNum, pageSize}) => {
            const res = idiom.findAll({
              offset: (pageNum - 1) * pageSize,
              limit: pageSize,
              raw: true,
            })
            return res
          },
          singleProverb: async (root, {word}) => {
            const res = idiom.findOne({
              where: {
                word
              },
              raw: true,
            })
            return res
          },
        },
        Mutation: {
          createProverb: async (root, {derivation, example, explanation, pinyin, word, abbreviation}) => {
            const res = await idiom.create({
              derivation,
              example,
              explanation,
              pinyin,
              word,
              abbreviation
            })
            return res
          }
        }
    }
    server = new ApolloServer({ typeDefs, resolvers });
    await server.start()
    server.applyMiddleware({ app });
    app.listen({port: 3010}, () => {
        console.log(`🚀 Server ready at http://localhost:3010${server.graphqlPath}`);
    });
}
startServer()