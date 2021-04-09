import express from 'express'
import { ApolloServer } from 'apollo-server-express'

import { typeDefs } from './typeDefs'
import { resolvers } from './resolvers/resolvers'
import { dbConfig } from './models'

const startServer = async () => {
    const server = new ApolloServer({ typeDefs, resolvers })

    dbConfig.sync().then(() => {
        console.log('Connected to DB')

        const app = express()

        server.applyMiddleware({ app })

        app.listen({ port: 3000 }, () =>
            console.log(
                `🚀 Server ready at http://localhost:3000${server.graphqlPath}`
            )
        )
    })
}

startServer()
