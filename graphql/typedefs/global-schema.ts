import {gql} from "apollo-server-express"

export const GlobalSchema = gql`
scalar JSON
schema{
        query: Query
        mutation: Mutation
    }

    type Query {
    getFormBySessionId(sessionId: String!): String!
    getFormByEmail(email: String!): String!
  }

  type Mutation {
    submitForm(email: String!, sessionId: String!, form_reponse: String!): Boolean!
  }
` 