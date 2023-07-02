export interface UserI {
    blocked: boolean
    confirmed: boolean
    createdAt: string
    email: string
    updatedAt: string
    username: string
}

export interface UserResponseI {
    jwt: string
    user: UserI
}
