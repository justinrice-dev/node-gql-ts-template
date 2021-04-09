import { User } from '../models'

// Provide resolver functions for your schema fields
export const resolvers = {
    Query: {
        getUser: async (_: any, args: any) => {
            const { id } = args

            return await User.findOne({ where: { id: id } })
        },
    },
    Mutation: {
        addUser: async (_: any, args: any) => {
            const { firstName, lastName, age, id, name, email } = args
            try {
                const user = User.create({
                    firstName,
                    lastName,
                    age,
                    id,
                    name,
                    email,
                })

                return true
            } catch (error) {
                return false
            }
        },
    },
}
