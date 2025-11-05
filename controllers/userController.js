import * as userModel from "../models/userModel.js";

export const resolvers = {
    Query: {
        getAllUsers: () => userModel.getAll(),
        getUserById: (_, {id}) => userModel.getById(id)
    },
    Mutation: {
        createUser: (_, {name, email, age}) => userModel.create(name, email, age)
    }
};