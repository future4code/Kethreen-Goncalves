
export const userTableName = "cookenu_users"
export const recipesTableName = "cookenu_recipes"

export type authenticationData = {
    id: string
}

export type recipes = {
    id: string
    title: string
    description: string
    createdAt: string
    authorId: string
}

export type user = {
    id: string
    name: string
    email: string
    password:string
    // recipes?: recipes[]
}