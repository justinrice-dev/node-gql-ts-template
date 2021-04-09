import express from 'express'
import { ApolloServer } from 'apollo-server-express'

import { typeDefs } from './typeDefs'
import { resolvers } from './resolvers/resolvers'
import { dbConfig } from './models'

const startServer = async () => {
    // Create the apollo server
    const server = new ApolloServer({ typeDefs, resolvers })

    // Sync with the Postgres DB
    dbConfig.sync().then(() => {
        console.log('Connected to DB')

        // Create an instance of expres
        const app = express()

        // Add this app as the serer middleware
        server.applyMiddleware({ app })

        // Start the Express app that is now injested into Apollo
        app.listen({ port: 3000 }, () =>
            console.log(
                `🚀 Server ready at http://localhost:3000${server.graphqlPath}`
            )
        )
    })
}

startServer()
