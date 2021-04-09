import { BuildOptions, Model } from 'sequelize'

/*
ALl of the models live on this file. 

All attributes that we take from this file are designed to match the models going into the db
THen models are exported from here so we can use them in other testing patterns and use cases.

*/

export interface UserAttributes {
    id: number
    firstName?: string
    lastName?: string
    age?: number
    name: string
    email: string
    createdAt?: Date
    updatedAt?: Date
}

export interface UserModel extends Model<UserAttributes>, UserAttributes {}
export class User extends Model<UserModel, UserAttributes> {}

export type UserStatic = typeof Model & {
    new (values?: object, options?: BuildOptions): UserModel
}

export interface SkillsAttributes {
    id: number
    skill: string
    createdAt?: Date
    updatedAt?: Date
}

export interface SkillsModel
    extends Model<SkillsAttributes>,
        SkillsAttributes {}

export class Skills extends Model<SkillsModel, SkillsAttributes> {}
export type SkillsStatic = typeof Model & {
    new (values?: object, options?: BuildOptions): SkillsModel
}
