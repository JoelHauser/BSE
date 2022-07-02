const { gql } = require("apollo-server-express");

const typeDefs = gql`
type Book {
    bookId: String
    authors: [String]
    description: String
    image: String
    link: String
    title: String
}
type User {
    _id: ID
    username: String
    password: String
    email: String
    savedBooks: [Book]
}
type Query {
    me: User
}
type Auth {
    token: ID!
    user: User
}
input SavedBookInput {
    authors: [String]
    description: String
    bookId: String
    image: String
    link: String
    title: String
}
type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, passowrd: String!): Auth
    saveBook(book: SavedBookInput): User
    removeBook(bookId: String!): User
}
`;

module.exports = typeDefs;
