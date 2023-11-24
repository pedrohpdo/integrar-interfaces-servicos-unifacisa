const { ApolloServer, gql } = require('apollo-server');

const typeDefs = gql`
    type Query {
        nome: String
        users: [User!]!
        getUserByEmail(email: String!) : User!
    }
    type User {
        _id: ID!
        name: String!
        email: String!
        active: Boolean
    }
    type Mutation {
        createUser(name: String!, email: String!): User!
    }
`;
const users = [
    {
        _id: String(Math.random()), name: "João", email: "joao@teste.com", active: true
    },
    {
        _id: String(Math.random()), name: "Cleito", email: "cleito@teste.com", active: true
    }
]
const resolvers = {
    Query: {
        nome: () => 'José Anderson',
        users: () => users,
        getUserByEmail: (_, args) => {
            return users.find((user) => user.email === args.email)   
        }
    },
    Mutation: {
        createUser: (_, args) => {
            const newUser = {
                _id: String(Math.random()),
                name: args.name,
                email: args.email,
                active: true
            };
            users.push(newUser);
            return newUser;
        }
    }
};

const server = new ApolloServer({typeDefs, resolvers});
server.listen().then(({url}) => console.log(`Server listening on ${url}`));