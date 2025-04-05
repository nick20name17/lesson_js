export type UserRole = 'admin' | 'user' | 'manager'

export interface User {
    id: number
    name: string
    hobby?: string
    isStudent: boolean
}

export interface Admin extends User {
    role: UserRole
}
